import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/prijava",
    name: "Prijava",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Prijava.vue"),
  },
  {
    path: "/registracija",
    name: "Registracije",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Registracija.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
