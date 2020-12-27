<template>
  <div>
    <div class="card" style="background-color: #424949">
      <article class="card-body mx-auto" style="max-width: 400px;">
        <h4 class="card-title mt-3 text-center">Prijava</h4>
        <p class="text-center">Prijavite se</p>
        <form>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
            <input
              name=""
              class="form-control"
              placeholder="Email adresa"
              type="email"
              v-model="email"
            />
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
            </div>
            <input
              class="form-control"
              placeholder="Lozinka"
              type="password"
              v-model="password"
            />
          </div>
          <!-- form-group// -->
          <div class="form-group">
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click="prijava"
            >
              Prijava
            </button>
          </div>
          <p class="divider-text"></p>
          <p>
            <a href="" class="btn btn-block btn-google">
              <i class="fab fa-google"></i> Login via Google</a
            >
            <a href="" class="btn btn-block btn-facebook">
              <i class="fab fa-facebook-f"></i> Login via facebook</a
            >
          </p>
        </form>
      </article>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase.js";
import Home from "@/views/Home.vue";

export default {
  name: "Prijava",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    prijava() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(function() {
          console.log("Uspješna prijava");
          alert("Uspješna prijava");
        })
        .catch(function(error) {
          console.error("Došlo je do greške", error);
          alert(error.message);
        });
      console.log("Nastavak");
    },
  },
};
</script>
