<script>
import { defineComponent } from "vue";
import ButtonRepo from "@/components/ButtonRepo.vue";
import FlyoutMenu from "@/components/FlyoutMenu.vue";

import { useMeta } from "vue-meta";
export default defineComponent({
  components: { ButtonRepo, FlyoutMenu },
  setup() {
    useMeta({
      title: "My Example App",
      titleTemplate: "%s - Yay!",
      htmlAttrs: {
        lang: "en",
        amp: true,
      },
    });
  },
});
</script>

<template>
  <div>
    <metainfo>
      <template v-slot:title="{ content }">{{ content }} - Yay!</template>
    </metainfo>
    <main>
      <div class="bg-gray-50">
        <div
          class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
        >
          <h2
            class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Test
            <br />
            <span class="text-indigo-600"
              >Vite 2.x + Vue 3.x + Tailwind 2.x</span
            >
          </h2>
          <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
            <div class="inline-flex rounded-md shadow">
              <router-link
                to="/"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"
                >Back Home</router-link
              >
            </div>
            <ButtonRepo />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
