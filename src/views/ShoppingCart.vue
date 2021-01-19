<template>
  <div class="container">
    <div class="card shopping-cart">
      <div class="card-header bg-dark text-light">
        <i
          class="fa fa-shopping-cart justify-content-center"
          aria-hidden="true"
        ></i>
        Shopping cart
        <div class="clearfix"></div>
      </div>
      <div class="card-body">
        <!-- PRODUCT -->
        <cart-item v-for="cart in carts" :key="cart.id" :cartInfo="cart" />
        <!-- END PRODUCT -->
        <div class="pull-right" v-if="carts">
          <button
            type="button"
            class="btn btn-outline-danger btn-xs"
            @click="brisanje()"
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="card-footer">
        <div class="form-row pull-right">
          <div class="" style="margin: 10px">
            <router-link to="checkout">
              <a class="btn btn-success pull-right">Checkout</a></router-link
            >
          </div>
        </div>
        <div class="form-row justify-content-left">
          <div class="pull-left" style="margin-top: 15px">
            Konačna cijena: <b>{{ konacnaCijena }}kn</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import store from "@/store";
import router from "@/router";

export default {
  name: "ShoppingCart",
  data() {
    return {
      carts: [],
      konacnaCijena: 0,
    };
  },
  mounted() {
    if (store.addingToCart) {
      for (let i = 0; i < store.addingToCart.length; i++) {
        this.carts.push(store.addingToCart[i]);
        console.log("Uspjeh");
        this.konacnaCijena = this.konacnaCijena + this.carts[i].cijena;
      }
    }
  },
  components: {
    CartItem,
  },
  methods: {
    brisanje() {
      this.carts = [];
      store.addingToCart = [];
      this.konacnaCijena = 0;
      store.cartNumber = 0;
    },
  },
};
</script>
<style scoped>
.quantity {
  float: left;
  margin-right: 15px;
  background-color: #eee;
  position: relative;
  width: 80px;
  overflow: hidden;
}

.quantity input {
  margin: 0;
  text-align: center;
  width: 15px;
  height: 15px;
  padding: 0;
  float: right;
  color: #000;
  font-size: 20px;
  border: 0;
  outline: 0;
  background-color: #f6f6f6;
}

.quantity input.qty {
  position: relative;
  border: 0;
  width: 100%;
  height: 40px;
  padding: 10px 25px 10px 10px;
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  border-radius: 0;
  background-clip: padding-box;
}

.quantity .minus,
.quantity .plus {
  line-height: 0;
  background-clip: padding-box;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  color: #bbb;
  font-size: 20px;
  position: absolute;
  height: 50%;
  border: 0;
  right: 0;
  padding: 0;
  width: 25px;
  z-index: 3;
}

.quantity .minus:hover,
.quantity .plus:hover {
  background-color: #dad8da;
}

.quantity .minus {
  bottom: 0;
}
.shopping-cart {
  margin-top: 20px;
}

.container {
  margin-bottom: 30px;
}
</style>
