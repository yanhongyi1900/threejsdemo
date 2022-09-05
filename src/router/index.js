import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./config.js";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
