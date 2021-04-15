<template>
  <div class="min-h-screen bg-gray-100">
    <main class="py-10">
      <!-- Page header -->
      <div
        class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8"
      >
        <div class="flex items-center space-x-5">
          <div class="flex-shrink-0">
            <div class="relative">
              <img class="h-16 w-16 rounded-full" :src="user.imageUrl" alt="" />
              <span
                class="absolute inset-0 shadow-inner rounded-full"
                aria-hidden="true"
              />
            </div>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">{{ user.name }}</h1>
            <p class="text-sm font-medium text-gray-500">
              Registriert seit
              <time datetime="2020-08-25">August 25, 2020</time>
            </p>
          </div>
        </div>
        <div
          class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"
        >
          <button
            type="button"
            class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          >
            Disqualify
          </button>
          <button
            type="button"
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          >
            Advance to offer
          </button>
        </div>
      </div>

      <div
        class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3"
      >
        <div class="space-y-6 lg:col-start-1 lg:col-span-2">
          <!-- Description list-->
          <section aria-labelledby="applicant-information-title">
            <div class="bg-white shadow sm:rounded-lg">
              <div class="px-4 py-5 sm:px-6">
                <h2
                  id="applicant-information-title"
                  class="text-lg leading-6 font-medium text-gray-900"
                >
                  Applicant Information
                </h2>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Personal details and application.
                </p>
              </div>
              <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Application for
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Backend Developer
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      ricardocooper@example.com
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Salary expectation
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">$120,000</dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">Phone</dt>
                    <dd class="mt-1 text-sm text-gray-900">+1 555-555-5555</dd>
                  </div>
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">About</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                      anim incididunt cillum culpa consequat. Excepteur qui
                      ipsum aliquip consequat sint. Sit id mollit nulla mollit
                      nostrud in ea officia proident. Irure nostrud pariatur
                      mollit ad adipisicing reprehenderit deserunt qui eu.
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <a
                  href="#"
                  class="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg"
                  >Read full application</a
                >
              </div>
            </div>
          </section>

          <!-- Comments-->
          <section aria-labelledby="notes-title">
            <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div class="px-4 py-5 sm:px-6">
                  <h2
                    id="notes-title"
                    class="text-lg font-medium text-gray-900"
                  >
                    Notes
                  </h2>
                </div>
                <div class="px-4 py-6 sm:px-6">
                  <ul class="space-y-8">
                    <li v-for="comment in comments" :key="comment.id">
                      <div class="flex space-x-3">
                        <div class="flex-shrink-0">
                          <img
                            class="h-10 w-10 rounded-full"
                            :src="`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`"
                            alt=""
                          />
                        </div>
                        <div>
                          <div class="text-sm">
                            <a href="#" class="font-medium text-gray-900">{{
                              comment.name
                            }}</a>
                          </div>
                          <div class="mt-1 text-sm text-gray-700">
                            <p>{{ comment.body }}</p>
                          </div>
                          <div class="mt-2 text-sm space-x-2">
                            <span class="text-gray-500 font-medium">{{
                              comment.date
                            }}</span>
                            {{ " " }}
                            <span class="text-gray-500 font-medium"
                              >&middot;</span
                            >
                            {{ " " }}
                            <button
                              type="button"
                              class="text-gray-900 font-medium"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-6 sm:px-6">
                <div class="flex space-x-3">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="user.imageUrl"
                      alt=""
                    />
                  </div>
                  <div class="min-w-0 flex-1">
                    <form action="#">
                      <div>
                        <label for="comment" class="sr-only">About</label>
                        <textarea
                          id="comment"
                          name="comment"
                          rows="3"
                          class="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                          placeholder="Add a note"
                        />
                      </div>
                      <div class="mt-3 flex items-center justify-between">
                        <a
                          href="#"
                          class="group inline-flex items-start text-sm space-x-2 text-gray-500 hover:text-gray-900"
                        >
                          <QuestionMarkCircleIcon
                            class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span> Some HTML is okay. </span>
                        </a>
                        <button
                          type="submit"
                          class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section
          aria-labelledby="timeline-title"
          class="lg:col-start-3 lg:col-span-1"
        >
          <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
            <h2 id="timeline-title" class="text-lg font-medium text-gray-900">
              Zuletzt aktiv in...
            </h2>

            <!-- Activity Feed -->
            <div class="mt-6 flow-root">
              <ul class="-mb-8">
                <li v-for="(item, itemIdx) in timeline" :key="item.id">
                  <div class="relative pb-8 flex flex-col justify-center">
                    <span
                      v-if="itemIdx !== timeline.length - 1"
                      class="absolute self-center top-4 left-4 -ml-px h-full w-0.5 bg-gray-300"
                      aria-hidden="true"
                    />
                    <div
                      class="relative flex space-x-3 flex-row justify-center"
                    >
                      <div class="self-center flex flex-row">
                        <span
                          :class="[
                            item.type.bgColorClass,
                            'h-8 w-8 text-xs rounded-full flex items-center text-center justify-center ring-8 ring-white self-center',
                          ]"
                        >
                          <component
                            :is="item.type.icon"
                            class="w-5 h-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div
                        class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                      >
                        <div>
                          <p class="text-sm">
                            <span class="text-gray-900"
                              >{{ item.chatroom.name }} -
                            </span>
                            <time
                              class="text-gray-500"
                              :datetime="item.datetime"
                              >{{ item.date }}</time
                            >
                          </p>
                          <p class="text-sm text-gray-500">
                            {{ item.chatroom.description }}
                          </p>
                        </div>
                        <div
                          class="text-right text-sm whitespace-nowrap text-gray-500 self-center"
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="mt-6 flex flex-col justify-stretch">
              <button
                type="button"
                class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Advance to offer
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
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
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  ArrowNarrowLeftIcon,
  CheckIcon,
  HomeIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ThumbUpIcon,
} from "@heroicons/vue/solid";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  ShieldExclamationIcon,
} from "@heroicons/vue/outline";

const user = {
  name: "Dries Vincent",
  username: "Quatschkopf88",
  imageUrl:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",

  usesExplicitContent: false,
};

const eventTypes = {
  reported: { icon: ShieldExclamationIcon, bgColorClass: "bg-red-400" },
  normal: { icon: ThumbUpIcon, bgColorClass: "bg-blue-500" },
  moderated: { icon: CheckIcon, bgColorClass: "bg-green-500" },
};

const timeline = [
  {
    id: 1,
    type: eventTypes.normal,
    chatroom: {
      name: "Arminia Bielefeld",
      description:
        "Hier kannst Du dich genüßlich über die Pfeifen und den Trainer aufregen!",
    },
    date: "Sep 20",
    datetime: "2020-09-20",
  },
  {
    id: 2,
    type: eventTypes.normal,
    chatroom: {
      name: "Arminia Bielefeld",
      description:
        "Hier kannst Du dich genüßlich über die Pfeifen und den Trainer aufregen!",
    },
    date: "Sep 22",
    datetime: "2020-09-22",
  },
  {
    id: 3,
    type: eventTypes.moderated,
    chatroom: {
      name: "Arminia Bielefeld",
      description:
        "Hier kannst Du dich genüßlich über die Pfeifen und den Trainer aufregen!",
    },
    date: "Sep 28",
    datetime: "2020-09-28",
  },
  {
    id: 4,
    type: eventTypes.reported,
    chatroom: {
      name: "Arminia Bielefeld",
      description:
        "Hier kannst Du dich genüßlich über die Pfeifen und den Trainer aufregen!",
    },
    date: "Sep 30",
    datetime: "2020-09-30",
  },
  {
    id: 5,
    type: eventTypes.moderated,
    chatroom: {
      name: "Arminia Bielefeld",
      description:
        "Hier kannst Du dich genüßlich über die Pfeifen und den Trainer aufregen!",
    },
    date: "Oct 4",
    datetime: "2020-10-04",
  },
];

const comments = [
  {
    id: 1,
    name: "Leslie Alexander",
    date: "4d ago",
    imageId: "1494790108377-be9c29b29330",
    body:
      "Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.",
  },
  {
    id: 2,
    name: "Michael Foster",
    date: "4d ago",
    imageId: "1519244703995-f4e0f30006d5",
    body:
      "Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.",
  },
  {
    id: 3,
    name: "Dries Vincent",
    date: "4d ago",
    imageId: "1506794778202-cad84cf45f1d",
    body:
      "Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.",
  },
];

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
    ArrowNarrowLeftIcon,
    BellIcon,
    HomeIcon,
    MenuIcon,
    PaperClipIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
    XIcon,
  },

  setup() {
    return {
      user,
      eventTypes,
      timeline,
      comments,
    };
  },
};
</script>
