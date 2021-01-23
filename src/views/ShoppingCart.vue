<template>
  <div class="container">
    <!--Section: Block Content-->
    <section>
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-8">
          <!-- Card -->
          <div class="mb-3">
            <div class="pt-4 wish-list">
              <h5 class="mb-4">
                <strong>Cart (<span>2</span> items)</strong>
              </h5>
              <hr class="mb-4" />
              <cart-item
                v-for="cart in carts"
                :key="cart.id"
                :cartInfo="cart"
              />
              <div>
                <a
                  href="#!"
                  type="button"
                  class="card-link-secondary pull-right text-uppercase mr-3"
                  ><i class="fas fa-trash-alt mr-1"></i> Remove item
                </a>
              </div>
              <br />
              <p class="text-primary mb-0">
                <i class="fas fa-info-circle mr-1"></i> Dodavanje u košaricu ne
                znači da su vaša drva rezervirana. Ne čekajte dugo!
              </p>
            </div>
          </div>
          <!--           -->

          <!-- Card -->
          <div class="mb-3">
            <div class="pt-4">
              <h5 class="mb-4">Očekivani datum dostave:</h5>

              <p class="mb-0">{{ datumIsporukeOD }} - {{ datumIsporukeDO }}</p>
            </div>
          </div>
          <!-- Card -->

          <!-- Card -->
          <div class="mb-3">
            <div class="pt-3">
              <h5 class="mb-4">Primamo:</h5>

              <img
                class="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa"
              />
              <img
                class="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard"
              />
              <img
                class="mr-2"
                width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                alt="PayPal acceptance mark"
              />
            </div>
          </div>
          <!-- Card -->
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4">
          <!-- Card -->
          <div class="mb-3">
            <div class="pt-4">
              <h5 class="mb-3">The total amount of</h5>

              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                >
                  Temporary amount
                  <span>$25.98</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center px-0"
                >
                  Shipping
                  <span>Gratis</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3"
                >
                  <div>
                    <strong>The total amount of</strong>
                    <strong>
                      <p class="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span
                    ><strong>{{ konacnaCijena.toFixed(2) }} kn</strong></span
                  >
                </li>
              </ul>

              <button type="button" class="btn btn-primary btn-block">
                Nastavite na plaćanje!
              </button>
            </div>
          </div>
          <!-- Card -->

          <!-- Card -->
          <div class="mb-3">
            <div class="pt-4">
              <a
                class="dark-grey-text d-flex justify-content-between"
                data-toggle="collapse"
                href="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Add a discount code (optional)
                <span><i class="fas fa-chevron-down pt-1"></i></span>
              </a>

              <div class="collapse" id="collapseExample">
                <div class="mt-3">
                  <div class="md-form md-outline mb-0">
                    <input
                      type="text"
                      id="discount-code"
                      class="form-control font-weight-light"
                      placeholder="Enter discount code"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card -->
        </div>
        <!--Grid column-->
      </div>
      <!-- Grid row -->
    </section>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import store from "@/store";
import moment from "moment";

export default {
  name: "ShoppingCart",
  data() {
    return {
      carts: [],
      konacnaCijena: 0,
      quantity: 1,
      datum: "",
      moment,
    };
  },
  mounted() {
    if (store.addingToCart) {
      for (let i = 0; i < store.addingToCart.length; i++) {
        this.carts.push(store.addingToCart[i]);
        console.log("Uspjeh prvi");
        this.konacnaCijena = this.konacnaCijena + this.carts[i].cijena;
      }
    }
  },
  components: {
    CartItem,
  },
  methods: {
    brisanje() {
      for (let i = 0; i < this.carts.length; i++) {
        this.carts.push(store.addingToCart[i]);
        console.log("Uspjeh");
        this.konacnaCijena = this.konacnaCijena + this.carts[i].cijena;
      }

      /*this.carts = [];
      store.addingToCart = [];
      this.konacnaCijena = 0;
      store.cartNumber = 0;*/
    },
  },
  computed: {
    datumIsporukeOD() {
      moment.locale("hr");
      let datum = Date.now();
      return moment(datum)
        .add(7, "days")
        .format("D. MMMM. YYYY");
    },
    datumIsporukeDO() {
      moment.locale("hr");
      let datum = Date.now();
      return moment(datum)
        .add(10, "days")
        .format("D. MMMM. YYYY");
    },
  },
};
</script>
<style scoped>
button {
  background: #f5f5f5;
  color: white;
  font-size: 12px;
  cursor: pointer;
  background: #daa520;
}
.container {
  background-color: white;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 15px;
  padding: 50px;
}
</style>
