import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import MainPage from "./pages/MainPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";

Vue.config.productionTip = false;

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

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
