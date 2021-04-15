<template>
  <div>
    <Navigation></Navigation>
    <div class="min-h-screen bg-gray-100">
      <div class="py-10">
        <div
          class="sm:px-6 lg:px-8 flex flex-row justify-start"
        >
          <Sidebar class="mr-5"></Sidebar>
          <router-view class="w-full" />
        </div>
      </div>
    </div>
    <SimpleFooter/>
  </div>
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
