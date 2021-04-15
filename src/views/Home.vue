<template>
  <div class="lg:col-span-8 xl:col-span-9 lg:grid lg:grid-cols-12 lg:gap-7">
    <main class="lg:col-span-7">
      <div class="px-4 sm:px-0">
        <div class="sm:hidden">
          <label for="question-tabs" class="sr-only">Select a tab</label>
          <select
            id="question-tabs"
            class="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"
          >
            <option
              v-for="tab in tabs"
              :key="tab.kex"
              :selected="tab.current"
              @click="tabs.forEach((t) => (t.current = t.key === tab.key))"
            >
              {{ tab.name }}
            </option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav
            class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
            aria-label="Tabs"
          >
            <a
              v-for="(tab, tabIdx) in tabs"
              :key="tab.key"
              :href="tab.href"
              :aria-current="tab.current ? 'page' : undefined"
              @click="tabs.forEach((t) => (t.current = t.key === tab.key))"
              :class="[
                tab.current
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10',
              ]"
            >
              <span>{{ tab.name }}</span>
              <span
                aria-hidden="true"
                :class="[
                  tab.current ? 'bg-rose-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5',
                ]"
              />
            </a>
          </nav>
        </div>
      </div>
      <div class="mt-4">
        <h1 class="sr-only">Recent questions</h1>
        <div v-if="loading">
          <ul class="space-y-4">
            <li
              v-for="i in 3"
              :key="i"
              class="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg animate-pulse"
            >
              <article :aria-labelledby="'question-title-' + i" class="w-full">
                <div>
                  <div class="flex space-x-3 w-full">
                    <div class="h-10 w-10 bg-gray-300 rounded-full flex-shrink-0">
                    </div>
                    <div class="min-w-0 flex flex-col w-full">
                      <p class="text-sm font-medium text-gray-900 w-3/4">
                        <span class="h-4 w-full bg-gray-300">&nbsp;</span>
                      </p>
                      <p class="text-sm text-gray-500 w-3/4">
                        <span class="h-4 w-full bg-gray-300">&nbsp;</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-2 text-sm text-gray-700 space-y-4 flex flex-col"
                >
                <span class="h-4 w-3/4 bg-gray-300">&nbsp;</span>
                <span class="h-4 w-1/4 bg-gray-300">&nbsp;</span>
                <span class="h-4 w-full bg-gray-300">&nbsp;</span>
                </div>
                <div class="mt-6 flex justify-between space-x-8">
                  <div class="flex space-x-6">
                    <span class="inline-flex items-center text-sm">
                      <IconButton
                        title="Nutzer Melden"
                        variant="red"
                        icon="FlagIcon"
                      ></IconButton>
                      <IconButton
                        title="Nutzer Blockieren"
                        variant="red"
                        icon="BanIcon"
                      ></IconButton>
                      <IconButton
                        title="Antworten"
                        variant="green"
                        icon="ChatAltIcon"
                      ></IconButton>
                      <IconButton
                        title="Profil ansehen"
                        variant="gray"
                        icon="EyeIcon"
                      ></IconButton>
                    </span>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
        <ul v-else class="space-y-4">
          <li
            v-for="question in messages"
            :key="question.id"
            class="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"
          >
            <article :aria-labelledby="'question-title-' + question.id">
              <div>
                <div class="flex space-x-3">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="question.author.imageUrl"
                      alt=""
                    />
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900">
                      <router-link
                        :to="'/user/' + question.author.username"
                        class="hover:underline"
                        >{{ question.author.username }}</router-link
                      >
                      <IconButton
                        variant="red"
                        icon="ShieldExclamationIcon"
                        disabled
                        v-if="question.author.usesExplicitContent"
                        title="Nutzt Kraftausdrücke"
                      ></IconButton>
                    </p>
                    <p class="text-sm text-gray-500">
                      <a :href="question.href" class="hover:underline">
                        <time :datetime="question.datetime">{{
                          question.date
                        }}</time>
                      </a>
                    </p>
                  </div>
                  <div class="flex-shrink-0 self-center flex">
                    <Menu as="div" class="relative inline-block text-left">
                      <div>
                        <MenuButton
                          class="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:bg-gray-300"
                        >
                          <span class="sr-only">Open options</span>
                          <DotsVerticalIcon
                            class="h-5 w-5"
                            aria-hidden="true"
                          />
                        </MenuButton>
                      </div>

                      <transition
                        enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95"
                      >
                        <MenuItems
                          class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <div class="py-1">
                            <MenuItem v-slot="{ active }">
                              <a
                                href="#"
                                :class="[
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'flex px-4 py-2 text-sm',
                                ]"
                              >
                                <StarIcon
                                  class="mr-3 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span>Add to favorites</span>
                              </a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                              <a
                                href="#"
                                :class="[
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'flex px-4 py-2 text-sm',
                                ]"
                              >
                                <CodeIcon
                                  class="mr-3 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span>Embed</span>
                              </a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                              <a
                                href="#"
                                :class="[
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'flex px-4 py-2 text-sm',
                                ]"
                              >
                                <FlagIcon
                                  class="mr-3 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span>Report content</span>
                              </a>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </transition>
                    </Menu>
                  </div>
                </div>
                <!-- <h2
                      :id="'question-title-' + question.id"
                      class="mt-4 text-base font-medium text-gray-900"
                    >
                      {{ question.title }}
                    </h2> -->
              </div>
              <div
                class="mt-2 text-sm text-gray-700 space-y-4"
                v-html="question.body"
              />
              <div class="mt-6 flex justify-between space-x-8">
                <div class="flex space-x-6">
                  <span class="inline-flex items-center text-sm">
                    <IconButton
                      title="Nutzer Melden"
                      variant="red"
                      icon="FlagIcon"
                    ></IconButton>
                    <IconButton
                      title="Nutzer Blockieren"
                      variant="red"
                      icon="BanIcon"
                    ></IconButton>
                    <!-- </span>
                      <span class="inline-flex items-center text-sm"> -->
                    <IconButton
                      title="Antworten"
                      variant="green"
                      icon="ChatAltIcon"
                    ></IconButton>
                    <!-- </span>
                      <span class="inline-flex items-center text-sm"> -->
                    <IconButton
                      title="Profil ansehen"
                      variant="gray"
                      icon="EyeIcon"
                    ></IconButton>
                  </span>
                </div>
                <!-- <div class="flex text-sm">
                      <span class="inline-flex items-center text-sm">
                        <button
                          class="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                        >
                          <ShareIcon class="h-5 w-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">Share</span>
                        </button>
                      </span>
                    </div> -->
              </div>
            </article>
          </li>
        </ul>
      </div>
    </main>
    <aside class="hidden lg:block xl:col-span-5">
      <div class="sticky top-4 space-y-4">
        <section aria-labelledby="who-to-follow-heading">
          <div class="bg-white rounded-lg shadow">
            <div class="p-6">
              <h2
                id="who-to-follow-heading"
                class="text-base font-medium text-gray-900"
              >
                Online
              </h2>
              <div class="mt-6 flow-root">
                <ul class="-my-4 divide-y divide-gray-200">
                  <li
                    v-for="user in whoToFollow"
                    :key="user.handle"
                    class="flex items-center py-4 space-x-3"
                  >
                    <div class="flex-shrink-0">
                      <img
                        class="h-8 w-8 rounded-full"
                        :src="user.imageUrl"
                        alt=""
                      />
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="text-sm font-medium text-gray-900">
                        <a :href="user.href">{{ user.username }}</a>
                      </p>
                      <p class="text-sm text-gray-500">
                        <a :href="user.href">{{ "@" + user.handle }}</a>
                      </p>
                    </div>
                    <div class="flex-shrink-0">
                      <IconButton
                        icon="ChatAltIcon"
                        variant="green"
                        @click="chatButtonClick"
                      ></IconButton>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-6">
                <a
                  href="#"
                  class="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="trending-heading">
          <div class="bg-white rounded-lg shadow">
            <div class="p-6">
              <h2
                id="trending-heading"
                class="text-base font-medium text-gray-900"
              >
                Trending
              </h2>
              <div class="mt-6 flow-root">
                <ul class="-my-4 divide-y divide-gray-200">
                  <li
                    v-for="post in trendingPosts"
                    :key="post.id"
                    class="flex py-4 space-x-3"
                  >
                    <div class="flex-shrink-0">
                      <img
                        class="h-8 w-8 rounded-full"
                        :src="post.user.imageUrl"
                        :alt="post.user.name"
                      />
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="text-sm text-gray-800">{{ post.body }}</p>
                      <div class="mt-2 flex">
                        <span class="inline-flex items-center text-sm">
                          <button
                            class="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                          >
                            <ChatAltIcon class="h-5 w-5" aria-hidden="true" />
                            <span class="font-medium text-gray-900">{{
                              post.comments
                            }}</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-6">
                <a
                  href="#"
                  class="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  </div>
</template>

<script>
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/vue";

import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PlusIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from "@heroicons/vue/solid";

import Sidebar from "@/components/navigation/Sidebar.vue";
import IconButton from "@/components/buttons/IconButton.vue";

import axios from "axios";

const tabs = [
  { key: "new", name: "Neuste Nachrichten", href: "#", current: true },
  { key: "request", name: "Anfragen", href: "#", current: false },
  { key: "supervisor", name: "Supervisor", href: "#", current: false },
];

let messages = [];

const whoToFollow = [
  {
    name: "Leonard Krasner",
    username: "BaldrianKopfkissen1993",
    handle: "leonardkrasner",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leonard Krasner",
    username: "BaldrianKopfkissen1993",
    handle: "leonardkrasner",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leonard Krasner",
    username: "BaldrianKopfkissen1993",
    handle: "leonardkrasner",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];
const trendingPosts = [
  {
    id: 1,
    user: {
      name: "Floyd Miles",
      imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    body:
      "What books do you have on your bookshelf just to look smarter than you actually are?",
    comments: 291,
  },
  // More posts...
];

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverPanel,
    ChatAltIcon,
    CodeIcon,
    DotsVerticalIcon,
    EyeIcon,
    FlagIcon,
    PlusIcon,
    ShareIcon,
    StarIcon,
    ThumbUpIcon,
    Sidebar,
    IconButton,
  },
  methods: {
    chatButtonClick() {
      alert("hi");
    },
    fetchMessages() {
      this.loading = true;
      axios
        .get("/api/messages", {
          headers: {
            Authorization: "Bearer lkdsfjldkjfkdajfdfdfe93409rueouf89afds=",
          },
        })
        .then((resp) => {
          this.loading = false;
          this.messages = resp.data;
        })
        .catch((error) => {
          console.error(error);
          setTimeout(() => {
            this.loading = false;
            this.messages = [
              {
                id: "81614",
                author: {
                  name: "Dries Vincent",
                  username: "Quatschkopf88",
                  imageUrl:
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  href: "#",

                  usesExplicitContent: false,
                },
                date: "December 9 at 11:43 AM",
                datetime: "2020-12-09T11:43:00",
                supervisor: false,
                request: false,
                // title: "What would you have done differently if you ran Jurassic Park?",
                body:
                  "\n          <p>\n            Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.\n          </p>\n          <p>\n            Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;\n          </p>\n        ",
              },
            ];
            localStorage.setItem('messages', 'value');
          }, 5000);
        });
    },
  },
  mounted() {
    this.fetchMessages();
  },
  data() {
    return {
      loading: true,
      tabs,
      messages,
      whoToFollow,
      trendingPosts,
    };
  },
};
</script>
