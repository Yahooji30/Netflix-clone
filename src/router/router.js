import { createRouter, createWebHistory } from "vue-router";

// import Login from "../pages/login.vue";
// import Email from "../pages/email.vue";

const route = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login.vue"),
  },
  {
    path: "/forgot/email",
    name: "email",
    component: () => import("../pages/email.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: route,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },
});

export default router;
