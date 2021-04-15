<template>
  <aside class="hidden lg:block lg:col-span-3 xl:col-span-2">
    <nav aria-label="Sidebar" class="sticky top-4 divide-y divide-gray-300">
      <div class="pb-8 space-y-1">
        <ListLink
          v-for="item in navigation"
          :key="item.name"
          :item="item"
        ></ListLink>
      </div>
      <div class="pt-10">
        <p
          class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
          id="communities-headline"
        >
          My communities
        </p>
        <div class="mt-3 space-y-2" aria-labelledby="communities-headline">
          <a
            v-for="community in communities"
            :key="community.name"
            :href="community.href"
            class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
          >
            <span class="truncate">
              {{ community.name }}
            </span>
          </a>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script>
import {
  FireIcon,
  HomeIcon,
  TrendingUpIcon,
  UserGroupIcon,
} from "@heroicons/vue/outline";

import ListLink from "@/components/navigation/ListLink.vue";

const communities = [
  { name: "Movies", href: "#" },
  { name: "Food", href: "#" },
  { name: "Sports", href: "#" },
  { name: "Animals", href: "#" },
  { name: "Science", href: "#" },
  { name: "Dinosaurs", href: "#" },
  { name: "Talents", href: "#" },
  { name: "Gaming", href: "#" },
];

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "Popular", href: "/popular", icon: FireIcon, current: false },
  {
    name: "Communities",
    href: "/communities",
    icon: UserGroupIcon,
    current: false,
  },
  { name: "Trending", href: "/trending", icon: TrendingUpIcon, current: false },
];

export default {
  components: {
    ListLink,
  },
  setup() {
    return {
      navigation,
      communities,
    };
  },
};
</script>
