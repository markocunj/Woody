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
        <form
          @submit.stop.prevent="submit"
          action="mailto:woody.webshop@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="ime">Ime</label>
              <input
                type="text"
                class="form-control"
                id="ime"
                placeholder=""
                value=""
                required=""
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="prezime">Prezime</label>
              <input
                type="text"
                class="form-control"
                id="prezime"
                placeholder=""
                value=""
                required=""
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="email"
              >Email <span class="text-muted">(Opcionalno)</span></label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Vaš e-mail"
            />
          </div>
          <div class="mb-3">
            <label for="address">Adresa</label>
            <input
              type="text"
              class="form-control"
              id="adresa"
              placeholder="Zagrebačka 1"
              required=""
            />
            <div class="invalid-feedback">
              Unesite adresu za dostavu.
            </div>
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
                <option>Primorsko-goranska</option>
                <option>Ličko-senjska</option>
                <option>Virovitičko-podravska</option>
                <option>Požeško-slavonska</option>
                <option>Brodsko-posavska</option>
                <option>Zadarska</option>
                <option>Osječko-baranjska</option>
                <option>Šibensko-kninska</option>
                <option>Vukovarsko-srijemska</option>
                <option>Splitsko-dalmatinska</option>
                <option>Istarska</option>
                <option>Dubrovačko-neretvanska</option>
                <option>Međimurska</option>
                <option>Grad Zagreb</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label for="zip">Zip</label>
              <input type="text" class="form-control" id="zip" required />
              <div class="invalid-feedback">Zip code required.</div>
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
            <div class="custom-control custom-radio">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                class="custom-control-input"
                required=""
              />
              <label class="custom-control-label" for="debit"
                >Debitna kartica</label
              >
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="cc-name">Ime na kartici</label>
              <input
                type="text"
                class="form-control"
                id="cc-name"
                placeholder=""
                required=""
              />
              <small class="text-muted"
                >Puno ime, kako je prikazano na kartici</small
              >
            </div>
            <div class="col-md-6 mb-3">
              <label for="cc-number">Broj kartice</label>
              <input
                type="text"
                class="form-control"
                id="cc-number"
                placeholder=""
                required=""
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="cc-expiration">Datum isteka</label>
              <input
                type="text"
                class="form-control"
                id="cc-expiration"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Expiration date required</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="cc-cvv">CVV</label>
              <input
                type="text"
                class="form-control"
                id="cc-cvv"
                placeholder=""
                required=""
              />
            </div>
          </div>
          <hr class="mb-4" />
          <button class="btn btn-primary btn-lg btn-block" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import CheckoutCartItem from "@/components/CheckoutCartItem.vue";
export default {
  data() {
    return {
      store,
      carts: [],
      konacnaCijena: 0,
    };
  },
  components: {
    CheckoutCartItem,
  },
  methods: {
    validate: function() {
      this.blured = true;
      this.valid = true;
    },

    submit: function() {
      this.validate();
      if (this.valid) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  computed: {
    cijenaDostave() {
      if (store.konacnaCijena <= 5000 && store.konacnaCijena != 0) {
        return 300;
      } else return 0;
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
