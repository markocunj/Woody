<template>
  <div class="home">
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template #header>Woody</template>

      <template #lead>
        <div style="opacity: 1.2;">
          Dobrodošli na naš web-shop! Uživajte u kupnji. Za sva pitanja i pomoć
          stojimo vam na raspolaganju.
        </div>
      </template>

      <hr class="my-4" style="color: #daa520; border: 1px solid; width: 40%" />

      <p>
        Ponudu možete pogledati pritiskom na Ponuda, ili klikom na gumb koji se
        nalazi niže.
      </p>
    </b-jumbotron>
    <div class="container" style="width: 35%;">
      <div class="form-row">
        <div class="form-group col-md-3 ikone">
          <h3>
            <i class="fas fa-tree"></i>
          </h3>
          <h4>Najbolja <br />drva</h4>
        </div>
        <div class="form-group col-md-3 ikone">
          <h3><i class="fas fa-truck"></i></h3>
          <h4>Brza <br />dostava</h4>
        </div>
        <div class="form-group col-md-3 ikone">
          <h3><i class="fas fa-info"></i></h3>
          <h4>Tehnička <br />podrška</h4>
        </div>
        <div class="form-group col-md-3 ikone">
          <h3><i class="fas fa-tags"></i></h3>
          <h4>Dobra <br />ponuda</h4>
        </div>
      </div>
    </div>
    <hr class="my-4" style="color: #616D6D; border: 1px solid; width: 50%" />
    <div class="container">
      <div class="form-row justify-content-center">
        <div class="form-group col-md-4">
          <div class="card sign-in">
            <article class="card-body">
              <h4 class="card-title mb-4 mt-1" style="color: #daa520">
                Ponuda
              </h4>
              <p>
                Proučite našu ponudu
              </p>
              <hr style="border-color: #ccc" />
              <p>
                Pogledajte našu ponudu drva, u kojoj sami birate dužinu i
                količinu drva koja vam najviše odgovara, klikom na gumb.
              </p>
              <hr
                class="my-4"
                style="color: #616D6D; border: 1px solid; width: 35%"
              />
              <p>
                Trenutno traju zimski popusti u kojima cijena ide čak do -20%!
              </p>
              <router-link to="/ponuda">
                <button type="button" class="btn btn-block btn-light">
                  Ponuda
                </button></router-link
              >
            </article>
          </div>
          <!-- card.// -->
        </div>

        <div v-if="!store.currentUser" class="form-group col-md-4">
          <div class="card sign-in">
            <article class="card-body">
              <h4 class="card-title mb-4 mt-1" style="color: #daa520">
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
                <hr
                  style="color: #616D6D; border: 1px solid; width: 20%; margin-bottom: 3px;"
                />
                <small href="#" class="text-muted"
                  ><a
                    href="#"
                    @click="promjenaLozinke()"
                    style="color: #ccc"
                    data-toggle="modal"
                    data-target="#promjenaLozinke"
                    >Zaboravili ste lozinku?</a
                  ></small
                >

                <button
                  type="submit"
                  class="btn btn1 btn-light btn-block"
                  style="margin-top: 15px;"
                >
                  Prijava
                </button>
              </form>
              <div
                class="modal fade"
                id="promjenaLozinke2"
                tabindex="-1"
                role="dialog"
                aria-labelledby="promjenaLozinke2"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div
                      class="modal-header justify-content-center"
                      style="color: black"
                    >
                      E-mail za promjenu lozinke poslan!
                    </div>
                    <div class="modal-body">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-dismiss="modal"
                      >
                        Super!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <!-- card.// -->
        </div>
      </div>
    </div>
    <hr class="my-4" style="color: #616D6D; border: 1px solid; width: 50%" />
    <div class="container" style="width: 35%;">
      <div class="form-row justify-content-center">
        <div class="form-group col-md-10">
          <h3>
            <i class="far fa-question-circle" style="color: #daa520"> </i>
          </h3>
          <h4>
            Za sve informacije javite nam se putem društvenih mreža ili e-maila:
          </h4>
          <ul class="social-icons">
            <li>
              <a
                class="facebook"
                style="color: #6b9aff"
                href="https://www.facebook.com/profile.php?id=100062178366842"
                ><i class="fa fa-facebook"></i
              ></a>
            </li>
            <li>
              <a
                class="twitter"
                style="color: #3b5998 "
                href="https://twitter.com/Woody48648855"
                ><i class="fa fa-twitter"></i
              ></a>
            </li>
            <li>
              <a class="" href="#"><i class="fab fa-google google"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-4" style="color: #616D6D; border: 1px solid; width: 30%" />
  </div>
</template>

<script>
import { firebase } from "@/firebase";
import store from "@/store";
export default {
  data() {
    return {
      store,
      email: "",
      password: "",
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
          this.wrongPasswordOrEmail = false;
        })
        .catch((error) => {
          const wrongError =
            "The password is invalid or the user does not have a password.";
          if (wrongError == error.message) {
            this.wrongPasswordOrEmail = true;
          }
        });
      console.log("Nastavak");
    },
    promjenaLozinke() {
      var auth = firebase.auth();
      var emailAddress = this.email;

      auth
        .sendPasswordResetEmail(emailAddress)
        .then(function() {
          console.log("Password reset sent");
        })
        .catch(function(error) {
          // An error happened.
        });
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
.jumbotron {
  background-image: url("../assets/suma.jpg");
  background-size: cover;
}
.container {
  background-color: transparent;
  margin: auto;
  color: white;
  border: 0;
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
