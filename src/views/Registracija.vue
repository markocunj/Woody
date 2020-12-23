<template>
  <div class="row">
    <div class="col-md-3 register-left">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="container">
      <h1 class="headline">Registracija</h1>
      <div class="col-lg-12 well">
        <div class="row">
          <form>
            <div class="col-sm-12">
              <div class="row">
                <div class="col-sm-6">
                  <label id="email">Email Address</label>
                  <input
                    type="text"
                    placeholder="Email adresa"
                    class="form-control"
                    v-model="email"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label id="ime">Ime</label>
                  <input
                    type="text"
                    placeholder="Ime"
                    class="form-control"
                    v-model="ime"
                  />
                </div>
                <div class="col-sm-6">
                  <label id="prezime">Prezime</label>
                  <input
                    type="text"
                    placeholder="Prezime"
                    class="form-control"
                    v-model="prezime"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <label id="pass">Lozinka</label>
                  <input
                    type="text"
                    placeholder="Lozinka"
                    class="form-control"
                    v-model="password"
                  />
                </div>
                <div class="col-sm-6">
                  <label id="repeat">Ponovljena lozinka</label>
                  <input
                    type="text"
                    placeholder="Ponovljena lozinka"
                    class="form-control"
                    v-model="repeatPassword"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <label id="year">Godina</label>
                  <input
                    type="text"
                    id="godina"
                    placeholder="Godina"
                    class="form-control"
                    v-model="godina"
                  />
                </div>
                <div class="col-sm-3">
                  <label id="day">Dan</label>
                  <input
                    type="text"
                    id="mh"
                    placeholder="Dan"
                    class="form-control"
                    v-model="dan"
                  />
                </div>
                <div class="col-sm-3">
                  <label id="month">Mjesec</label>
                  <input
                    type="text"
                    id="dan"
                    placeholder="Mjesec"
                    class="form-control"
                    v-model="mjesec"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <p>
                    Ovim putem potvrđujem ispravnost svih priloženih informacija
                    i potvrđujem da imam najmanje 18 godina.
                  </p>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  <label>Potvrđujem</label>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-lg btn-info"
                  @click="registracija"
                >
                  Registracija
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
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
      ime: "",
      prezime: "",
      godina: "",
      mjesec: "",
      dan: "",
    };
  },
  methods: {
    registracija() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          alert("Uspješna registracija");
          console.log(user);
        })
        .catch((error) => {
          console.error("Došlo je do greške", error);
          alert(error.message);
        });
    },
  },
};
</script>
