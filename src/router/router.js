import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from "../pages/home.vue";
import Login from "../pages/login.vue";
import SignUp from "../pages/signup.vue";
import Movie from "../pages/movie.vue";

const route = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { requiredAuth: true },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: Movie,
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiredAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
