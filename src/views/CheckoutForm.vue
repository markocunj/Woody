<template>
  <div class="container">
    <div class="py-5 text-center">
      <img
        class="d-block mx-auto mb-4"
        src="@/assets/logo.png"
        alt=""
        width="72"
        height="72"
      />
      <h2>Obrazac za plaćanje</h2>
      <p class="lead">
        Na ovom dijelu vaše kupovine, unosite svoju adresu na koju želite da vam
        se drva dostave, te odabirete način plaćanja i unosite potrebne
        informacije. U polje za napomene možete napisati eventualne napomene za
        ljude koji vam rade/dostavljaju drva.
      </p>
    </div>
    <div class="row">
      <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Vaša košarica</span>
          <span class="badge badge-secondary badge-pill">{{
            store.cartNumber
          }}</span>
        </h4>
        <ul class="list-group mb-3 sticky-top">
          <checkout-cart-item
            v-for="addingToCart in store.addingToCart"
            :key="addingToCart.id"
            :checkoutCartInfo="addingToCart"
          />
          <li class="list-group-item d-flex justify-content-between">
            <span>Dostava </span>
            +{{ cijenaDostave }} kn
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Ukupno: </span>
            <strong
              >{{ (store.konacnaCijena + cijenaDostave).toFixed(2) }}kn</strong
            >
          </li>
        </ul>
      </div>
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">Podaci za dostavu</h4>
        <form @submit.stop.prevent="submit">
          <div class="mb-3">
            <label for="address">Adresa</label>
            <input
              type="text"
              class="form-control"
              id="adresa"
              placeholder="Zagrebačka 1"
              v-model="adresa"
              required
            />
          </div>
          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="country">Država</label>
              <select class="custom-select d-block w-100" id="country">
                <option>Hrvatska</option>
              </select>
            </div>
            <div class="col-md-4 mb-3">
              <label for="zupanija">Županija</label>
              <select
                class="custom-select d-block w-100"
                id="zupanija"
                v-model="zupanija"
                required
              >
                <option value="">Izaberite...</option>
                <option>Zagrebačka</option>
                <option>Krapinsko-zagorska</option>
                <option>Sisačko-moslavačka</option>
                <option>Karlovačka</option>
                <option>Varaždinska</option>
                <option>Koprivničko-križevačka</option>
                <option>Bjelovarsko-bilogorska</option>
                <option>Međimurska</option>
                <option>Grad Zagreb</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label for="zip">Zip</label>
              <input
                type="text"
                class="form-control"
                id="zip"
                v-model="zip"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': !validZIP(zip) && blured,
                }"
                v-on:blur="blured = true"
                required
              />
              <div class="invalid-feedback">Unesite ispravan ZIP.</div>
            </div>
          </div>
          <div class="mb-3">
            <label for="email"
              >Napomene <span class="text-muted">(Po izboru)</span></label
            >
            <input
              type="napomene"
              class="form-control"
              id="napomene"
              v-model="napomene"
              placeholder="Vaše eventualne napomene"
            />
          </div>
          <hr class="mb-4" />
          <h4 class="mb-3">Plaćanje</h4>
          <div class="d-block my-3">
            <div class="custom-control custom-radio">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                class="custom-control-input"
                checked=""
                required=""
              />
              <label class="custom-control-label" for="credit"
                >Kreditna kartica</label
              >
            </div>
          </div>
          <div id="paypal-" aria-labelledby="paypal"></div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="cc-name">Ime na kartici</label>
              <input
                type="text"
                class="form-control"
                id="cc-name"
                placeholder=""
                v-model="imeKartica"
                required
              />
              <small class="text-muted"
                >Puno ime, kako je prikazano na kartici</small
              >
            </div>
            <div class="col-md-6 mb-3">
              <label for="cc-number">Broj kartice</label>
              <input
                type="number"
                class="form-control"
                id="cc-number"
                placeholder="Broj"
                v-model="brojKartice"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': !validBrojKartice(brojKartice) && blured,
                }"
                v-on:blur="blured = true"
                required
              />
              <div class="invalid-feedback">
                Unesite pravilan broj s kartice
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="cc-expiration">Datum isteka</label>
              <input
                type="text"
                class="form-control"
                id="cc-expiration"
                placeholder="Datum"
                v-model="cardDatum"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': !validCardDatum(cardDatum) && blured,
                }"
                v-on:blur="blured = true"
                required
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="cc-cvv">CVV</label>
              <input
                type="number"
                class="form-control"
                id="cc-cvv"
                placeholder="CVV"
                v-model="cardCV"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': !validCardCV(cardCV) && blured,
                }"
                v-on:blur="blured = true"
                required
              />
            </div>
          </div>
          <hr class="mb-4" />
          <button
            class="btn btn-primary btn-lg btn-block"
            type="submit"
            :disabled="!testIspravnosti"
            data-toggle="modal"
            data-target="#uspjesnaNarudzba"
          >
            Nastavite na plaćanje
          </button>
          <div
            class="modal fade"
            id="uspjesnaNarudzba"
            tabindex="-1"
            role="dialog"
            aria-labelledby="uspjesnaNarudzba2"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header justify-content-center">
                  Vaša narudžba je uspješno provedena!
                </div>
                <div class="modal-body">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    data-dismiss="modal"
                    @click="redirect()"
                  >
                    Super!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import CheckoutCartItem from "@/components/CheckoutCartItem.vue";
import { db } from "@/firebase";
export default {
  data() {
    return {
      store,
      konacnaCijena: 0,
      blured: false,
      valid: false,
      email: store.currentEmail,
      adresa: "",
      drzava: "Hrvatska",
      zupanija: "",
      zip: "",
      imeKartica: "",
      napomene: "",
      brojKartice: "",
      cardCV: "",
      cardDatum: "",
      status: "proizvodnja",
      narudzbaUspjesna: false,
      ispravno: false,
    };
  },
  components: {
    CheckoutCartItem,
  },
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    validate: function() {
      this.blured = true;
      if (
        this.validBrojKartice(this.brojKartice) &&
        this.validCardCV(this.cardCV) &&
        this.validCardDatum(this.cardDatum) &&
        this.validZIP(this.zip)
      ) {
        this.valid = true;
      }
    },
    validBrojKartice: function(brojKartice) {
      let test = brojKartice;
      return test.toString().length === 16;
    },
    validCardCV: function(cardCV) {
      return cardCV.toString().length === 3;
    },
    validCardDatum: function(cardDatum) {
      return cardDatum;
    },
    validZIP: function(zip) {
      return zip > 9999 && zip < 54000;
    },
    submit: function() {
      this.validate();
      if (this.valid) {
        db.collection("narudzbe")
          .add({
            korisnik: store.currentUser.displayName,
            email: this.email,
            adresa: this.adresa,
            drzava: this.drzava,
            zupanija: this.zupanija,
            status: this.status,
            zip: this.zip,
            napomene: this.napomene,
            narudzba: store.addingToCart,
            cijena_narudzbe: store.konacnaCijena,
            datum_narudzbe: Date.now(),
            id_narudzbe: Math.random(),
          })
          .then((doc) => {
            console.log("Narudzba spremljena", doc);
            store.addingToCart = [];
            store.konacnaCijena -= store.konacnaCijena;
            store.cartNumber -= store.cartNumber;
          })
          .catch((e) => {
            console.error(e);
          });
        this.narudzbaUspjesna = true;
      }
    },
  },
  computed: {
    cijenaDostave() {
      if (store.konacnaCijena <= 5000 && store.konacnaCijena != 0) {
        return 300;
      } else return 0;
    },
    testIspravnosti: function() {
      if (
        this.email != "" &&
        this.adresa != "" &&
        this.zupanija != "" &&
        this.zip != "" &&
        this.cardCV != "" &&
        this.cardDatum != "" &&
        this.imeKartica != "" &&
        this.brojKartice != ""
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 960px;
  background-color: white;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 20px;
  border-radius: 1%;
}

.lh-condensed {
  line-height: 1.25;
}
</style>
