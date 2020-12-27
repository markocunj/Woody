import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ponuda from "../views/Ponuda.vue";
import Prijava from "../views/Prijava.vue";
import Registracija from "../views/Registracija.vue";
import Kontakt from "../views/Kontakt.vue";

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
    component: Prijava,
  },
  {
    path: "/registracija",
    name: "Registracije",
    component: Registracija,
  },
  {
    path: "/ponuda",
    name: "Ponuda",
    component: Ponuda,
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: Kontakt,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
