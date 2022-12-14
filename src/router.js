import Vue from "vue";
import Router from "vue-router";
import Home from "./view/Home.vue";
import Login from "./view/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});
