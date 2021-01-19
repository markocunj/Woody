<template>
  <div
    class="container"
    style="background-color: white; margin-top: 20px; margin-bottom: 50px; padding: 50px;"
  >
    <div
      class="card"
      style="padding: 30px; border-color: #daa520; border-radius: 30px;"
    >
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8 mx-auto">
          <h2 class="h3 mb-4 page-title">Profil</h2>
          <div class="my-4">
            <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  >O vama</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="info-tab"
                  data-toggle="tab"
                  href="#info"
                  role="tab"
                  aria-controls="info"
                  aria-selected="true"
                  >Povijest narudžbi</a
                >
              </li>
              <li
                class="nav-item"
                v-if="!store.currentUserLoggedInWithGoogleOrFacebook"
              >
                <a
                  class="nav-link"
                  id="promjenaLozinke-tab"
                  data-toggle="tab"
                  href="#promjenaLozinke"
                  role="tab"
                  aria-controls="promjenaLozinke"
                  aria-selected="false"
                  >Promjena lozinke</a
                >
              </li>
            </ul>
            <div class="tab-content profile-tab" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label style="border-bottom: 1px solid #daa520"
                      >Ime i prezime</label
                    >
                    <div class="form-control">
                      {{ store.trenutniKorisnik.ime }}
                      {{ store.trenutniKorisnik.prezime }}
                    </div>
                  </div>
                  <div class="form-group col-md-4">
                    <label style="border-bottom: 1px solid #daa520"
                      >Email</label
                    >
                    <div class="form-control">
                      {{ store.trenutniKorisnik.email }}
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label style="border-bottom: 1px solid #daa520"
                      >Datum rođenja</label
                    >
                    <div class="form-control">
                      {{ store.trenutniKorisnik.dan }}.
                      {{ store.trenutniKorisnik.mjesec }}.
                      {{ store.trenutniKorisnik.godina }}
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <button
                      type="button"
                      class="btn btn-block"
                      style="border: 1px solid #daa520; "
                      @click="odjava()"
                    >
                      Odjava
                    </button>
                  </div>
                </div>
                <hr class="my-4" style="border-color:black" />
              </div>
              <div
                class="tab-pane fade"
                id="info"
                role="tabpanel"
                aria-labelledby="info-tab"
              >
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label style="border-bottom: 1px solid #daa520"
                      >Email</label
                    >
                    <div class="form-control">
                      {{ store.trenutniKorisnik.email }}
                    </div>
                  </div>
                  <div class="form-group col-md-4">
                    <label style="border-bottom: 1px solid #daa520"
                      >Adresa</label
                    >
                    <div class="form-control">Ščapovec 1</div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="promjenaLozinke"
                role="tabpanel"
                aria-labelledby="promjenaLozinke-tab"
              >
                <form>
                  <div class="row mb-4">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="inputPassword5">Nova lozinka</label>
                        <input
                          type="password"
                          class="form-control"
                          id="inputPassword5"
                          placeholder="Nova lozinka"
                          v-model="newPassword"
                          style="border: 1px solid gray;"
                          autocomplete="on"
                        />
                      </div>
                      <div class="form-group">
                        <label for="inputPassword6">Potvrdite lozinku</label>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Potvrdite lozinku"
                          id="inputPassword6"
                          v-model="confirmPassword"
                          style="border: 1px solid gray;"
                          autocomplete="on"
                        />
                      </div>

                      <button
                        type="button"
                        class="btn btn-primary"
                        style="margin-bottom: 10px;"
                        @click="promjenaLozinke()"
                      >
                        Promjena lozinke
                      </button>
                    </div>
                    <div
                      class="col-md-6"
                      style="border: 1px solid gray; padding: 10px; border-radius: 10px"
                    >
                      <p class="mb-2">Zahtjevi lozinke</p>
                      <p class="small text-muted mb-2">
                        Da bi postavili novu lozinku, morate pratiti sljedeće
                        zahtjeve:
                      </p>
                      <ul class="small text-muted pl-4 mb-0">
                        <li>Najmanje 8 slova</li>
                        <li>Najmanje jedan broj</li>
                        <li>Ne može biti jednaka kao prošla lozinka</li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase";
import router from "@/router";
import store from "@/store.js";
import { db } from "@/firebase";

export default {
  name: "Profil",
  data() {
    return {
      store,
      newPassword: "",
      confirmPassword: "",
      email: "",
    };
  },
  mounted() {
    console.log(store.currentUserLoggedInWithGoogleOrFacebook);
    this.email = store.currentEmail;
    db.collection("users")
      .where("email", "==", this.email)
      .get()
      .then(function(querySnapshot) {
        let korisnik = {};
        store.trenutniKorisnik = {};
        querySnapshot.forEach(function(doc) {
          const data = doc.data();
          korisnik = {
            email: data.email,
            dan: data.dan,
            mjesec: data.mjesec,
            godina: data.godina,
            ime: data.ime,
            prezime: data.prezime,
            datum_registracije: data.datum_registracije,
          };
          store.trenutniKorisnik = korisnik;
          console.log(store.trenutniKorisnik, "u izvlacenju");
        });
      });
  },
  methods: {
    odjava() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Home" });
          store.currentEmail = "";
        });
    },
    promjenaLozinke() {
      var user = firebase.auth().currentUser;
      if (this.newPassword == this.confirmPassword) {
        user
          .updatePassword(this.newPassword)
          .then(() => {
            alert("Usspješna promjena.");
            this.newPassword = "";
            this.confirmPassword = "";
          })
          .catch((error) => {
            console.error(error);
            alert(error.message);
          });
      } else {
        alert("Lozinke moraju biti jednake");
        this.newPassword = "";
        this.confirmPassword = "";
      }
    },
  },
};
</script>
<style scoped>
body {
  color: #8e9194;
  background-color: #f4f6f9;
}
img {
  vertical-align: middle;
  border-style: none;
}
.text-muted {
  color: #aeb0b4 !important;
}
.text-muted {
  font-weight: 300;
}

.btn-primary {
  background-color: #daa520;
  border: 0px;
}
.btn:hover {
  background-color: #4d5154;
  color: white;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #4d5154;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #85797900;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
