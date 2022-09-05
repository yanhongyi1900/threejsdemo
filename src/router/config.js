export const routes = [
  { path: "/", redirect: "/home" },
  {
    name: "home",
    path: "/home",
    component: () => import("@/pages/Home/index.vue"),
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/pages/Login/index.vue"),
  },
  {
    name: "matter",
    path: "/matter",
    component: () => import("@/pages/Matter/index.vue"),
  },
  {
    name: "meta",
    path: "/meta",
    component: () => import("@/pages/Meta/index.vue"),
  },
];
