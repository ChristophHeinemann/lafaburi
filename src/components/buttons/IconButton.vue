<template>
  <button
    :class="`inline-flex space-x-2 text-${variant}-400 hover:text-${
      variant + '-600'
    } focus:outline-none active:bg-gray-200 mx-2 focus:ring-2 focus:ring-offset-2 focus:ring-${variant}-500`"
  >
    <component :is="icon" class="h-5 w-5" aria-hidden="true" />
    <label v-if="label">{{ label }}</label>
  </button>
</template>

<script>
import * as Solid from "@heroicons/vue/solid";
import * as Outline from "@heroicons/vue/outline";
export default {
  props: {
    icon: String,
    variant: String,
    label: String,
  },
  components: {
    ...Solid,
    ...Outline,
  },
};
</script>

<style></style>
