<template>
  <div id="app">
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style="background-color: #26272b;"
    >
      <a class="navbar-brand" href="#">Woody</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ml-auto mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Ponuda</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Kontakt</router-link>
          </li>
          <!--<li class="nav-item">
             <router-link to="/prijava" class="nav-link">Prijava</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/registracija" class="nav-link"
              >Registracija</router-link
            >
          </li> 
          </li>-->
        </ul>
        <router-link to="/prijava">
          <button
            type="button"
            style="background-color: transparent; color: rgba(255,255,255,.5); "
            class="btn btn-light"
          >
            Prijava
          </button>
        </router-link>
      </div>
    </nav>
    <router-view />
    <WoodyFooter />
  </div>
</template>
<script>
import WoodyFooter from "@/components/WoodyFooter.vue";
export default {
  name: "App",
  components: {
    WoodyFooter,
  },
};
</script>
<style lang="scss">
@import "./assets/style/woody.css";
@import "./assets/style/media.css";
</style>
