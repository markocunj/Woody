<template>
  <div class="prijava">
    <hr class="my-4" style="color: #616D6D; border: 1px solid; width: 40%" />
    <div class="container">
      <div class="form-row justify-content-center">
        <div class="form-group col-md-4">
          <div class="card sign-in">
            <article class="card-body">
              <h4 class="card-title mb-4 mt-1" style="color: white !important">
                Prijava
              </h4>
              <hr
                class=""
                style="color: #daa520; border: 1px solid; width: 35%;"
              />
              <p>
                <button
                  class="btn btn-block btn-outline-light"
                  @click="googleLogin()"
                >
                  <i class="fab fa-google google"></i>
                  Prijava via Google
                </button>
                <a href="" class="btn btn-block btn-outline-primary">
                  <i class="fab fa-facebook-f"></i> Prijava via Facebook</a
                >
              </p>
              <hr style="border-color: #ccc" />
              <form>
                <div class="form-group">
                  <input
                    name=""
                    class="form-control"
                    placeholder="Email or login"
                    type="email"
                    v-model="email"
                  />
                </div>
                <!-- form-group// -->
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="******"
                    type="current-password"
                    v-model="currentPassword"
                  />
                </div>
              </form>
              <button
                type="submit"
                class="btn btn1 btn-light btn-block"
                @click="prijava()"
              >
                Prijava
              </button>
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
      currentPassword: "",
      store,
    };
  },
  methods: {
    prijava() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log("Uspjesna prijava");
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.error("Došlo je do greške", error);
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
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          console.log(errorCode);
          var errorMessage = error.message;
          // The email of the user's account used.
          console.log(errorMessage);
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          console.log(email);
          var credential = error.credential;
          console.log(credential);
          // ...
        });
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
</style>
