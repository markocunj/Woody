<template>
  <div id="app">
    <nav
      class="navbar navbar-expand-md justify-content-center "
      style="background-color: #26272b"
    >
      <a href="/" class="navbar-brand d-flex w-50 mr-auto">Woody </a>
      <button
        class="navbar-toggler"
        type="button"
        data-target="#navbarToggler"
        data-toggle="collapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse w-100" id="navbarToggler">
        <ul class="nav navbar-nav w-100 justify-content-center">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ponuda" class="nav-link">Ponuda</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/kontakt" class="nav-link">Kontakt</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
          <li class="nav-item" v-if="store.cartNumber != 0">
            <router-link to="/kosarica" class="nav-link"
              ><i class="fas fa-shopping-cart" style="font-size:24px"></i>
              <span class="badge badge-warning" id="lblCartCount">
                {{ store.cartNumber }}
              </span></router-link
            >
          </li>
          <li class="nav-item gumb">
            <a
              v-if="
                !store.currentUser &&
                  $router.currentRoute.path != '/prijava' &&
                  $router.currentRoute.path != '/registracija'
              "
            >
              <router-link to="/prijava">
                <button type="button" class="btn btn-light">
                  Prijava
                </button>
              </router-link>
            </a>

            <a v-if="store.currentUser">
              <router-link to="/profil">
                <button type="button" class="btn btn-light">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  Profil
                </button>
              </router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <transition name="fade" mode="out-in"> <router-view /></transition>
    <WoodyFooter />
  </div>
</template>

<script>
import WoodyFooter from "@/components/WoodyFooter.vue";
import { firebase } from "@/firebase";
import router from "@/router";
import store from "@/store.js";

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;
  if (user) {
    console.log(user.email);
    store.currentUser = user.email;

    if (!currentRoute.meta.needsUser) {
    }
  } else {
    console.log("No user");
    store.currentUser = null;

    if (currentRoute.meta.needsUser) {
      router.push({ name: "Prijava" });
    }
  }
});

export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  methods: {
    odjava() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Prijava" });
        });
    },
  },
  components: {
    WoodyFooter,
  },
};
</script>

<style lang="scss">
@import "./assets/style/woody.css";
@import "./assets/style/media.css";
.nav-link {
  color: #daa520;
}
.navbar-brand {
  color: #daa520;
}

nav a:hover {
  color: #ccc;
}
.btn-light:hover {
  background-color: #ccc;
  color: #daa520;
}

.btn-light {
  background-color: transparent;
  color: #daa520;
}
.btn-light:hover {
  background-color: #ccc;
  color: black;
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
