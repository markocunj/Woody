<template>
  <div class="form-row">
    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-8">
      <h4 class="product-name">
        <strong>{{ cart.naslov }}</strong>
      </h4>
      <h4>
        <small>{{ cart.podnaslov }}</small>
      </h4>
    </div>
    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
      <div
        class="col-3 col-sm-3 col-md-8 text-md-right"
        style="padding-top: 10px"
      >
        <h6>
          <strong
            ><span class="text-muted">{{ cart.cijena }}</span></strong
          >
        </h6>
      </div>
      <a v-if="store.addingToCart">
        <div class="col-2 col-sm-2 col-md-4 text-right">
          <button
            type="button"
            class="btn btn-outline-danger btn-xs"
            @click="brisanje()"
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button></div
      ></a>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "CartItem",
  data() {
    return {
      cart: [],
      store,
    };
  },

  mounted() {
    this.cart = store.addingToCart;
  },
  methods: {
    brisanje() {
      this.cart = [];
      store.addingToCart = "";
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
</style>
