import { createRouter, createWebHistory } from "vue-router";
import { routes } from "../routes.js";

export default (app) => {
  app.use(
    createRouter({
      history: createWebHistory(),
      routes,
    })
  );
};
