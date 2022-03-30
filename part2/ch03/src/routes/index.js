import VueRouter from "vue-router";
import Vue from "vue";
import MainPage from "../pages/MainPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import ProfilePage from "../pages/ProfilePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/login",
    name: "MainPage",
    component: LoginPage,
  },
  {
    path: "/profile",
    name: "MainPage",
    component: ProfilePage,
  },
];
const router = new VueRouter({
  routes,
});

export default router;
