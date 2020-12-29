<template>
  <div id="app">
    <nav class="navbar navbar-expand-md justify-content-center"  style="background-color: #26272b;">
    <a href="/" class="navbar-brand d-flex w-50 mr-auto">Woody </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse w-100">
        <ul class="navbar-nav w-100 justify-content-center">
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
            <li class="nav-item">
                <a
          v-if="
            !store.currentUser &&
              $router.currentRoute.path != '/prijava' &&
              $router.currentRoute.path != '/registracija'
          "
        >
          <router-link to="/prijava">
            <button
              type="button"
              style="background-color: transparent; color: rgba(255,255,255,.5); "
              class="btn btn-light stisni"
            >
              Prijava
            </button>
          </router-link>
        </a>
        <a v-if="store.currentUser" href="#" @click.prevent="odjava()">
          <router-link to="/home">
            <button
              type="button"
              style="background-color: transparent; color: rgba(255,255,255,.5); "
              class="btn btn-light stisni"
            >
              Odjava
            </button>
          </router-link>
        </a>
            </li>
        </ul>
    </div>
</nav>
 <router-view />
    <WoodyFooter />
  </div>
</template>


<script>
import WoodyFooter from "@/components/WoodyFooter.vue";
import { firebase } from "@/firebase";
import router from "@/router";
import store from "@/store.js";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.email);
    store.currentUser = user.email;
  } else {
    console.log("No user");
    store.currentUser = null;
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
@media (min-width: 768px) {
.navbar-brand.abs
    {
        position: absolute;
        width: 100%;
        left: 0;
        text-align: center;
    }
}

nav a:hover {
  color:purple;
}
</style>
