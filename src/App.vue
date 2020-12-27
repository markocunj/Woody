<template>
   
  <div id="app"> 
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">nesto sto treba </a>
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
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/login" class="nav-link">Prijava</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/singup" class="nav-link"
              >Registracija</router-link
            >
          </li>
        </ul>
        <button type="button">stisni</button>
      </div>
    </nav>
      <router-view />
  </div>
</template>

<style lang="scss">
  @import "./assets/style/woody.css";
  @import "./assets/style/media.css";
</style>
