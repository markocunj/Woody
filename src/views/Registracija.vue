<template>
  <div class="signup__container">
    <div class="container__child signup__form">
      <h2 class="card-title mt-6 text-center">
        <a style=" border-bottom: 1px solid #daa520; padding-bottom: 5px;"
          >Registracija</a
        >
      </h2>
      <form @submit.stop.prevent="submit">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="name">Ime</label>
            <input
              class="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Ime"
              required
              v-model="ime"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="lastname">Prezime</label>
            <input
              class="form-control"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Prezime"
              required
              v-model="prezime"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            class="form-control"
            type="text"
            name="email"
            id="email"
            placeholder="E-mail adresa"
            v-model="email"
            v-bind:class="{
              'form-control': true,
              'is-invalid': !validEmail(email) && blured,
            }"
            v-on:blur="blured = true"
          />
          <div class="invalid-feedback">
            <i class="fas fa-info-circle"></i> Morate unijeti ispravan mail
          </div>
          <div class="text-danger" v-if="errorEmail">
            <i class="fas fa-info-circle"></i> Ovaj mail se već koristi
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="password">Zaporka</label>
            <input
              class="form-control"
              type="password"
              name="password"
              id="password"
              autocomplete="on"
              v-model="password"
              placeholder="Zaporka"
              v-bind:class="{
                'form-control': true,
                'is-invalid': !validPassword(password) && blured,
              }"
              v-on:blur="blured = true"
              required
            />
            <div class="invalid-feedback">
              <i class="fas fa-info-circle"></i> Najmanje 8 znakova i jedno
              veliko slovo
            </div>
          </div>
          <div class="form-group col-md-6">
            <label for="passwordRepeat">Ponovi zaporku</label>
            <input
              class="form-control"
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              v-model="repeatPassword"
              autocomplete="on"
              v-bind:class="{
                'form-control': true,
                'is-invalid':
                  !validRepeatPassword(password, repeatPassword) && blured,
              }"
              v-on:blur="blured = true"
              placeholder="Ponovi zaporku"
              required
            />
            <div class="invalid-feedback">
              <i class="fas fa-info-circle"></i> Lozinke moraju biti jednake
            </div>
          </div>
        </div>
        <label style="margin-bottom: 10px; border-bottom: 1px solid #daa520"
          >Datum rođenja</label
        >
        <div class="form-row">
          <div class="form-group col-md-2">
            <label for="Dan">Dan</label>
            <select name="Dan" class="form-control" v-model="dan" required>
              <option value="">- Dan -</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </div>
          <div class="form-group col-md-5">
            <label for="Mjesec">Mjesec</label>
            <select
              name="Mjesec"
              class="form-control"
              v-model="mjesec"
              required
            >
              <option value="">- Mjesec -</option>
              <option value="Siječanj">Siječanj</option>
              <option value="Veljača">Veljača</option>
              <option value="Ožujak">Ožujak</option>
              <option value="Travanj">Travanj</option>
              <option value="Svibanj">Svibanj</option>
              <option value="Lipanj">Lipanj</option>
              <option value="Srpanj">Srpanj</option>
              <option value="Kolovoz">Kolovoz</option>
              <option value="Rujan">Rujan</option>
              <option value="Listopad">Listopad</option>
              <option value="Studeni">Studeni</option>
              <option value="Prosinac">Prosinac</option>
            </select>
          </div>
          <div class="form-group col-md-5">
            <label for="year">Godina</label>
            <input
              class="form-control"
              type="year"
              name="year"
              id="year"
              v-model="godina"
              placeholder="Godina"
              v-bind:class="{
                'form-control': true,
                'is-invalid': !validGodina(godina) && blured,
              }"
              v-on:blur="blured = true"
              required
            />
            <div class="invalid-feedback">
              <i class="fas fa-info-circle"></i> Unesite valjanu godinu.
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <b-form-checkbox
              style="color: #999"
              id="checkbox-1"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
              required
            >
              Ovim putem potvrđujem da imam 18 ili više godina.
            </b-form-checkbox>
          </div>
        </div>
        <div class="m-t-lg">
          <ul class="list-inline">
            <li>
              <input class="btn btn--form" type="submit" value="Registracija" />
            </li>
            <li>
              <a class="signup__link" style="color: white;">Imate račun? </a>
              <a class="signup__link"
                ><router-link to="/prijava" style="color: #daa520"
                  >Ulogirajte se!</router-link
                ></a
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
import { db } from "@/firebase";
import store from "@/store";

export default {
  name: "Registracija",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      ime: "",
      prezime: "",
      dan: "",
      mjesec: "",
      godina: "",
      blured: false,
      valid: false,
      errorEmail: false,
    };
  },
  methods: {
    registracija() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log("Uspjesna registracija");
          this.errorEmail = false;
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.error("Došlo je do greške", error);
          if (
            error.message ==
            "The email address is already in use by another account."
          ) {
            this.errorEmail = true;
            console.log(this.errorE);
          }
        });
    },
    validate: function() {
      this.blured = true;
      if (
        this.validEmail(this.email) &&
        this.validPassword(this.password) &&
        this.validRepeatPassword(this.passwordRepeat) &&
        this.validGodina(this.godina) &&
        this.validDan(this.dan) &&
        this.validMjesec(this.mjesec)
      ) {
        this.valid = true;
        db.collection("users")
          .add({
            email: this.email,
            dan: this.dan,
            mjesec: this.mjesec,
            godina: this.godina,
            ime: this.ime,
            prezime: this.prezime,
            datum_registracije: Date.now(),
          })
          .then((doc) => {
            console.log("Podaci spremljeni", doc);
          })
          .catch((e) => {
            console.error(e);
          });
        store.currentEmail = this.email;
      }
    },

    validEmail: function(email) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      return re.test(email.toLowerCase());
    },

    validPassword: function(password) {
      let testPassword = /^[A-Z]/;
      return password.length >= 8 && testPassword.test(password);
    },

    validMjesec: function(mjesec) {
      return mjesec != "";
    },
    validDan: function(dan) {
      return dan != "";
    },
    validRepeatPassword: function(password, repeatPassword) {
      return password == repeatPassword;
    },

    validGodina: function(godina) {
      return godina > 1920 && godina < 2022;
    },
    submit: function() {
      this.validate();
      if (this.valid) {
        this.registracija();
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
.card-title {
  color: #999;
  padding-bottom: 15px;
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
  min-width: 299px;
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
  color: white;
}
[type="password"] {
  color: WHITE;
}
.btn--form {
  padding: 0.5rem 2.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  background: #111;
  border-radius: remy(35px);
  width: calc(50%-8px);
}
.btn--form:hover {
  background-color: #999;
  color: black;
}
.signup__link {
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: underline;
  color: #999;
}
</style>
