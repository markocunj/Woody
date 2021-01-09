<template>
  <div class="signup__container">
    <div class="container__child signup__form">
      <h2 class="card-title mt-6 text-center">
        <a style="  border-bottom: 1px solid #daa520; padding-bottom: 5px;"
          >Registracija</a
        >
      </h2>
      <form action="#">
        <div class="form-group">
          <label for="username">Ime i Prezime</label>
          <input
            class="form-control"
            type="text"
            name="username"
            id="username"
            placeholder="Ime"
            autocomplete="off"
          />
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
            autocomplete="off"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="password">Zaporka</label>
            <input
              class="form-control"
              type="password"
              name="password"
              id="password"
              v-model="password"
              placeholder="Zaporka"
              autocomplete="off"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <label for="passwordRepeat">Ponovi zaporku</label>
            <input
              class="form-control"
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              v-model="repeatPassword"
              placeholder="Ponovi zaporku"
              autocomplete="off"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-5">
            <label for="address">Adresa</label>
            <input
              class="form-control"
              type="address"
              name="adresa"
              id="adresa"
              placeholder="Adresa"
              required
            />
          </div>
          <div class="form-group col-md-5">
            <label for="address">Grad</label>
            <input
              class="form-control"
              type="city"
              name="city"
              id="city"
              placeholder="Grad"
              required
            />
          </div>
          <div class="form-group col-md-2">
            <label for="address">Kućni br</label>
            <input
              class="form-control"
              type="kucniBr"
              name="kucniBr"
              id="kucniBr"
              placeholder="Kućni"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="address">Županija</label>
            <select
              class="form-control"
              type="županija"
              name="županija"
              id="županija"
              required
            >
              <option>Izaberi županiju..</option>
              <option>Krapinsko-zagorska županija</option>
              <option>Sisačko-moslavačka županija</option>
              <option>Karlovačka županija</option>
              <option>Varaždinska županija</option>
              <option>Koprivničko-križevačka županija</option>
              <option>Bjelovarsko-bilogorska županija</option>
              <option>Primorsko-goranska županija</option>
              <option>Ličko-senjska županija</option>
              <option>Virovitičko-podravska županija</option>
              <option>Požeško-slavonska županija</option>
              <option>Brodsko-posavska županija</option>
              <option>Zadarska županija</option>
              <option>Osječko-baranjska županija</option>
              <option>Šibensko-kninska županija</option>
              <option>Vukovarsko-srijemska županija</option>
              <option>Splitsko-dalmatinska županija</option>
              <option>Istarska županija</option>
              <option>Dubrovačko-neretvanska županija</option>
              <option>Međimurska županija</option>
              <option>Grad Zagreb</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="address">Država</label>
            <select
              class="form-control"
              type="country"
              name="country"
              id="country"
              required
            >
              <option>Hrvatska</option>
            </select>
          </div>
        </div>
        <div class="m-t-lg">
          <ul class="list-inline">
            <li>
              <input
                class="btn btn--form"
                type="button"
                value="Registracija"
                @click="registracija()"
              />
            </li>
            <li>
              <a class="signup__link" style="color: white;">Imate račun?</a>
              <a class="signup__link"
                ><router-link to="/prijava"> Ulogirajte se!</router-link></a
              >
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>
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

<script>
import { firebase } from "@/firebase.js";
export default {
  name: "Registracija",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
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
