import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
import { createMetaManager } from "vue-meta";
const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router).use(createMetaManager(), {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});

app.mount("#app");
