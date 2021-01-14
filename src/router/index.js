import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ponuda from "../views/Ponuda.vue";
import Prijava from "../views/Prijava.vue";
import Registracija from "../views/Registracija.vue";
import Kontakt from "../views/Kontakt.vue";
import Profil from "../views/Profil.vue";
import store from "@/store";
import ShoppingCart from "../views/ShoppingCart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      needsUser: false,
    },
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
    meta: {
      needsUser: false,
    },
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: Kontakt,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
  },
  {
    path: "/kosarica",
    name: "Kosarica",
    component: ShoppingCart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(
    "Stara ruta",
    from.name,
    "-->",
    to.name,
    "korisnik",
    store.currentUser
  );
  const noUser = store.currentUser === null;
  if (noUser && to.meta.needsUser) {
    next("Prijava");
  } else {
    next();
  }
});

export default router;
