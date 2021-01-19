<template>
  <div class="prijava" style="padding-top: 50px; padding-bottom: 50px;">
    <hr class="my-4" style="color: #616D6D; border: 1px solid; width: 40%" />
    <div class="container" style="margin-top: 30px;">
      <div class="form-row justify-content-center">
        <div class="form-group col-md-4">
          <div class="card sign-in">
            <article class="card-body">
              <h4 class="card-title mb-4 mt-1" style="color: white !important">
                Prijava
              </h4>
              <router-link to="/registracija"
                ><div class="separator">
                  Nemate račun? Klik ovdje
                </div></router-link
              >
              <p>
                <button
                  class="btn btn-block"
                  style="background-color: #DD4B39; color: white;"
                  @click="googleLogin()"
                >
                  <i class="fab fa-google google" style="color: white;"></i>
                  Prijava via Google
                </button>
                <a
                  href=""
                  class="btn btn-block"
                  style="background-color: #3b5998; color: white"
                >
                  <i class="fab fa-facebook-f"></i> Prijava via Facebook</a
                >
              </p>
              <hr style="border-color: #ccc" />
              <form @submit.stop.prevent="submit">
                <div class="form-group">
                  <input
                    placeholder="E-mail"
                    v-model="email"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid': !validEmail(email) && blured,
                    }"
                    v-on:blur="blured = true"
                  />
                  <div class="invalid-feedback">
                    <i class="fas fa-info-circle"></i> Morate unijeti ispravan
                    mail
                  </div>
                </div>
                <div class="form-group">
                  <input
                    placeholder="Lozinka"
                    class="form-control"
                    type="password"
                    v-model="password"
                    autocomplete="on"
                  />
                </div>
                <div
                  class="text-danger"
                  v-if="wrongPasswordOrEmail"
                  style="margin-bottom: 10px;"
                >
                  <i class="fas fa-info-circle"></i> Neispravan e-mail ili
                  šifra.
                </div>
                <button type="submit" class="btn btn1 btn-light btn-block">
                  Prijava
                </button>
              </form>
            </article>
          </div>
        </div>
      </div>
      <!-- card.// -->
    </div>
    <hr class="my-4" style="color: #616D6D; border: 1px solid; width: 40%" />
  </div>
</template>

<script>
import { firebase } from "@/firebase.js";
import Home from "@/views/Home.vue";
import store from "@/store";

export default {
  name: "Prijava",
  data() {
    return {
      email: "",
      password: "",
      store,
      blured: false,
      valid: false,
      wrongPasswordOrEmail: false,
    };
  },
  methods: {
    prijava() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          this.$router.push({ name: "Home" });
          this.wrongEmailOrPassword = false;
          console.log(store.currentEmail, "U prijavi");
        })
        .catch((error) => {
          console.error("Došlo je do greške", error);
          const wrongError =
            "The password is invalid or the user does not have a password.";
          if (wrongError == error.message) {
            this.wrongPasswordOrEmail = true;
          }
        });
      console.log("Nastavak");
    },
    googleLogin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          store.currentUserLoggedInWithGoogleOrFacebook = true;
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
          this.$router.push({ name: "Home" });
          var token = credential.accessToken;
          var user = result.user;
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          console.log(errorCode);
          var errorMessage = error.message;
          console.log(errorMessage);
          var email = error.email;
          console.log(email);
          var credential = error.credential;
          console.log(credential);
        });
    },

    validate: function() {
      this.blured = true;
      if (this.validEmail(this.email)) {
        this.valid = true;
      }
    },

    validEmail: function(email) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      return re.test(email.toLowerCase());
    },

    submit: function() {
      this.validate();
      if (this.valid) {
        this.prijava();
      }
    },
  },
};
</script>

<style scoped>
.btn1 {
  background-color: transparent;
  color: #daa520;
}
.btn1:hover {
  background-color: #ccc;
  color: black;
}
.ikone {
  opacity: 0.5;
}

.sign-in {
  background-color: #212529;
}

.google {
  background: -webkit-linear-gradient(#ea4335, #fbbc05, #34a853, #4285f4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 25px;
  color: #ccc;
}
.separator:hover {
  color: #daa520;
}
.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #daa520;
}
.separator::before {
  margin-right: 0.25em;
}
.separator::after {
  margin-left: 0.25em;
}
</style>
