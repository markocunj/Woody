<template>
  <div class="signup__container">
    <div class="container__child signup__form">
      <form action="#">
        <div class="form-group">
          <label for="username">Ime i Prezime</label>
          <input
            class="form-control"
            type="text"
            name="username"
            id="username"
            placeholder="Ime i prezime"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            class="form-control"
            type="text"
            name="email"
            id="email"
            placeholder="E-mail adresa"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="password">Zaporka</label>
          <input
            class="form-control"
            type="password"
            name="password"
            id="password"
            v-model="password"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-group">
          <label for="passwordRepeat">Ponovi zaporku</label>
          <input
            class="form-control"
            type="password"
            name="passwordRepeat"
            id="passwordRepeat"
            v-model="repeatPassword"
            placeholder="Repeat password"
            required
          />
        </div>
        <div class="m-t-lg">
          <ul class="list-inline">
            <li>
              <input
                class="btn btn--form"
                type="button"
                @click="registracija()"
                value="Registracija"
              />
            </li>
            <li>
              <a class="signup__link" style="color: white;">
                Imate račun?
                <router-link to="/prijava">Prijavite se</router-link></a
              >
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase.js";

export default {
  name: "Registracija",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      imePreizme: "",
      errorMessage: "",
    };
  },
  methods: {
    registracija() {
      if (this.password == this.repeatPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            console.log("Uspješna registracija");

            this.$router.replace({ name: "Prijava" });
          })
          .catch(function(error) {
            console.error("Došlo je do greške", error);
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
body {
  font: 100% / 1.414 "Open Sans", "Roboto", arial, sans-serif;
  background: #ffffff;
}
a,
[type="submit"] {
  transition: all 0.25s ease-in;
}
.signup__container {
  position: relative;
  top: 10%;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.heading--primary {
  font-size: 1.999rem;
}
.heading--secondary {
  font-size: 1.414rem;
}
.thumbnail__links {
  align-self: flex-end;
  width: 100%;
}
.thumbnail__links a {
  font-size: 1rem;
  color: #fff;
}
.signup__form {
  padding: 2.5rem;
  background: #212529;
  width: 30%;
}
label {
  font-size: 0.85rem;
  text-transform: uppercase;
  color: #ccc;
}
.form-control {
  background-color: transparent;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
[type="text"] {
  color: #111;
}
[type="password"] {
  color: #111;
}
.btn--form {
  padding: 0.5rem 2.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  background: #111;
  border-radius: remy(35px);
}
.signup__link {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
}
</style>
