<template>
  <a
    :href="item.href"
    :class="[
      item.current
        ? 'bg-gray-200 text-gray-900'
        : 'text-gray-600 hover:bg-gray-50',
      'group flex items-center px-3 py-2 text-sm font-medium rounded-md',
    ]"
    :aria-current="item.current ? 'page' : undefined"
  >
    <component
      :is="item.icon"
      :class="[
        item.current
          ? 'text-gray-500'
          : 'text-gray-400 group-hover:text-gray-500',
        'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
      ]"
      aria-hidden="true"
    />
    <span class="truncate">
      {{ item.name }}
    </span>
  </a>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style></style>
