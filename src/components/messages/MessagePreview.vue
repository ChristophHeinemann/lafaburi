<template>
  <article
    :aria-labelledby="'question-title-' + message.id"
    @click="messageClick"
  >
    <div>
      <div class="flex space-x-3">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" :src="author.imageUrl" alt="" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-medium text-gray-900">
            <router-link
              :to="'/user/' + author.username"
              class="hover:underline"
              >{{ author.username }}</router-link
            >
            <IconButton
              variant="red"
              icon="ShieldExclamationIcon"
              disabled
              v-if="author.usesExplicitContent"
              title="Nutzt Kraftausdrücke"
            ></IconButton>
          </p>
          <p class="text-sm text-gray-500">
            <time class="hover:underline" :datetime="message.datetime">{{
              message.date
            }}</time>
          </p>
        </div>
        <div class="flex-shrink-0 self-center flex">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:bg-gray-300"
              >
                <span class="sr-only">Open options</span>
                <DotsVerticalIcon class="h-5 w-5" aria-hidden="true" />
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
                    <IconButton
                      icon="StarIcon"
                      variant="yellow"
                      title="Als Favorit markieren"
                      label="Als Favorit markieren"
                    ></IconButton>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <IconButton
                      icon="TrashIcon"
                      variant="red"
                      title="Nachricht löschen"
                      label="Nachricht löschen"
                    ></IconButton>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
    <div class="mt-2 text-sm text-gray-700 space-y-4" v-html="message.body" />
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
</template>

<script>
import IconButton from "@/components/buttons/IconButton.vue";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

import { DotsVerticalIcon } from "@heroicons/vue/solid";

export default {
  props: {
    message: Object,
    author: Object,
  },
  components: {
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    DotsVerticalIcon,
  },

  methods: {
    messageClick() {
      this.$emit("message-clicked", this.message);
    },
  },
};
</script>

<style></style>
