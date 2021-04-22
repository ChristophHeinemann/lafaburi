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
        <div v-if="messages.loading">
          <ul class="space-y-4">
            <li
              v-for="i in 3"
              :key="i"
              class="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg animate-pulse"
            >
              <article :aria-labelledby="'question-title-' + i" class="w-full">
                <div>
                  <div class="flex space-x-3 w-full">
                    <div
                      class="h-10 w-10 bg-gray-300 rounded-full flex-shrink-0"
                    ></div>
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
                <div class="mt-2 text-sm text-gray-700 space-y-4 flex flex-col">
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
            v-for="message in messages"
            :key="message.id"
            class="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"
          >
            <MessagePreview
              :message="message"
              :author="message.author"
            ></MessagePreview>
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
  TrashIcon,
  ThumbUpIcon,
} from "@heroicons/vue/solid";

import Sidebar from "@/components/navigation/Sidebar.vue";
import IconButton from "@/components/buttons/IconButton.vue";
import MessagePreview from "@/components/messages/MessagePreview.vue";

import axios from "axios";
import { useMeta } from "vue-meta";
import { getCurrentInstance, onMounted, reactive } from "vue";

const tabs = [
  { key: "new", name: "Neuste Nachrichten", href: "#", current: true },
  { key: "request", name: "Anfragen", href: "#", current: false },
  { key: "supervisor", name: "Supervisor", href: "#", current: false },
];

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
    TrashIcon,
    MessagePreview,
  },
  setup() {
    useMeta({
      title: "My Example App",
      titleTemplate: "%s - Yay!",
      htmlAttrs: {
        lang: "en",
        amp: true,
      },
    });
    const storage = localStorage.getItem("messages");
    const messages = reactive(
      storage ? JSON.parse(storage) : { loading: true, messages: [] }
    );

    onMounted(() => {
      fetchMessages();
    });

    const chatButtonClick = () => {
      alert("hi");
    };
    const fetchMessages = () => {
      axios
        .get("/api/messages", {
          headers: {
            Authorization: "Bearer lkdsfjldkjfkdajfdfdfe93409rueouf89afds=",
          },
        })
        .then((resp) => {
          messages.loading = false;
          messages.messages = resp.data;
          localStorage.setItem("messages", messages);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return {
      tabs,
      messages,
      whoToFollow,
      trendingPosts,
      chatButtonClick,
      fetchMessages,
    };
  },
};
</script>
