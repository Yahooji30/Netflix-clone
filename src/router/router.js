import { createRouter, createWebHistory } from "vue-router";

// import Login from "../pages/login.vue";
// import Email from "../pages/email.vue";

const route = [
  {
    path: "/",
    name: "login",
    component: ()=>import('../pages/login.vue'),
  },
  {
    path: "/forgot/email",
    name: "email",
    component: ()=>import('../pages/email.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: route,
});

export default router;
