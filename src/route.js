import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "./view/MainPage.vue";
import AboutPage from "./view/AboutPage.vue";
import SignupPage from "./view/SignupPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
    {
      path: "/signup",
      component: SignupPage,
    },
  ],
});

export default router;
