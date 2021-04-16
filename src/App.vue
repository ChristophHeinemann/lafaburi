<template>
  <router-view></router-view>
</template>

<script>
import Navigation from "@/components/navigation/Navigation.vue";
import Sidebar from "@/components/navigation/Sidebar.vue";
import SimpleFooter from "@/components/navigation/SimpleFooter.vue";
export default {
  components: {
    Navigation,
    Sidebar,
    SimpleFooter,
  },
};
</script>
