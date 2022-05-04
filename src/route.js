import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "./view/MainPage.vue";
import AboutPage from "./view/AboutPage.vue";

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
  ],
});

export default router;
