<template>
  <div class="card bg-light">
    <article class="card-body mx-auto" style="max-width: 400px;">
      <h4 class="card-title mt-3 text-center">Registracija</h4>
      <p class="text-center">Registrirajte se na našu stranicu</p>
      <p>
        <a href="" class="btn btn-block btn-google">
          <i class="fab fa-google"></i> Login via Google</a
        >
        <a href="" class="btn btn-block btn-facebook">
          <i class="fab fa-facebook-f"></i> Login via facebook</a
        >
      </p>
      <p class="divider-text">
        <span class="bg-light">ILI</span>
      </p>
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
            v-model="username"
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
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
          </div>
          <input
            class="form-control"
            placeholder="Ponovljena lozinka"
            type="password"
            v-model="passwordRepeat"
          />
        </div>
        <!-- form-group// -->
        <div class="form-group">
          <button
            type="button"
            @click="registracija"
            class="btn btn-primary btn-block"
          >
            Registracija
          </button>
        </div>
        <!-- form-group// -->
        <p class="text-center">
          Registrirani ste? <router-link to="/prijava">Prijava</router-link>
        </p>
      </form>
    </article>
  </div>
  <!-- card.// -->
</template>

<script>
import { firebase } from "@/firebase.js";

export default {
  name: "Registracija",
  data() {
    return {
      username: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    registracija() {
      if (this.password == this.passwordRepeat) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.username, this.password)
          .then(function() {
            console.log("Uspješna registracija");
            alert("Uspješna registracija");
          })
          .catch(function(error) {
            console.error("Došlo je do greške", error);
            alert(error.message);
          });
        console.log("Nastavak");
      } else {
        alert("Password nije jednak repeat passwordu.");
      }
    },
  },
};
</script>

<style scoped>
.divider-text {
  position: relative;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.divider-text span {
  padding: 7px;
  font-size: 12px;
  position: relative;
  z-index: 2;
}
.divider-text:after {
  content: "";
  position: absolute;
  width: 100%;
  border-bottom: 1px solid #ddd;
  top: 55%;
  left: 0;
  z-index: 1;
}

.btn-facebook {
  background-color: #405d9d;
  color: #fff;
}
.btn-google {
  background-color: #7c98a8;
  color: #fff;
}
</style>
