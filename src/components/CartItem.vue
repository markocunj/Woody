<template>
  <div class="row mb-4">
    <div class="col-md-5 col-lg-3 col-xl-3">
      <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
        <img class="img-fluid w-100" :src="cartInfo.url" />
      </div>
    </div>
    <div class="col-md-7 col-lg-9 col-xl-9">
      <div>
        <div class="d-flex justify-content-between">
          <div>
            <h5>{{ cartInfo.naslov }}</h5>
            <p class="mb-3 text-muted text-uppercase small">
              {{ cartInfo.podnaslov }}
            </p>
            <p class="mb-2 text-muted small">
              Količina: {{ cartInfo.kolicina }} metara
            </p>
            <p class="mb-3 text-muted small">
              Dužina: {{ cartInfo.duzina }} cm
            </p>
          </div>
          <div>
            <a
              href="#!"
              type="button"
              class="card-link-secondary small text-uppercase mr-3"
              @click="removeItem()"
              ><i class="fas fa-trash-alt mr-1"></i> Maknite iz košarice
            </a>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div></div>
          <p class="mb-0">
            <span
              ><strong id="summary"
                >{{ cartInfo.cijena.toFixed(2) }} kn</strong
              ></span
            >
          </p>
        </div>
      </div>
      <hr class="mb-4" />
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  props: ["cartInfo"],
  name: "CartItem",
  data() {
    return {
      store,
    };
  },
  methods: {
    idPostoji(id) {
      return store.addingToCart.some(function(el) {
        return el.id === id;
      });
    },
    removeItem() {
      console.log(this.cartInfo);
      for (let i = 0; i < store.addingToCart.length; i++) {
        if (this.cartInfo.id == store.addingToCart[i].id) {
          store.konacnaCijena -= this.cartInfo.cijena;
          if (store.konacnaCijena <= 0) {
            store.konacnaCijena = 0;
          }
          store.addingToCart.pop();
          store.cartNumber -= 1;
        }
      }
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
