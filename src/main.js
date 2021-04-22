import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
// import { routes } from "./routes.js";
import router from "@/plugins/router";
import { createMetaManager } from "vue-meta";
import axios from "@/plugins/axios";
const app = createApp(App);

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

app
  .use(router)
  .use(createMetaManager(), {
    // optional pluginOptions
    refreshOnceOnNavigation: true,
  })
  .use(axios);

app.mount("#app");
