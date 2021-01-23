<template>
  <div class="cashout">
    <div class="cjeli">
      <div class="naslov">
        <div class="stavke">
          <div style="padding: 26px 30px 16px">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            Shopping cart
          </div>
        </div>
        <div class="">
          <ul v-for="cart in carts" :key="cart.id" :cartInfo="cart">
            <!-- PRODUCT -->
            <li>
              <div style=" padding: 30px 0px; font-size: 0.8em ;">
                <span class="span1"
                  ><img
                    src="../assets/bukva.jpg"
                    style="width: 100%; padding: 10px; height: 140px"
                  />
                </span>
                <div style="padding-top:30px;">
                  <p style="float:left">{{ cart.cijena }}kn</p>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-xs btnBrisanje"
                    @click="brisanje()"
                  >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </button>
                  <br />
                  <p style="float: left ">{{ cart.naslov }}</p>
                  <br />
                  <p style="float: left">{{ cart.podnaslov }}</p>

                  <div
                    class="quantity-toggle"
                    style="float: right; height:30px;display:flex;"
                  >
                    <button @click="decrement()">&mdash;</button>
                    <input type="text" :value="quantity" />
                    <button @click="increment()">&#xff0b;</button>
                  </div>
                  <small
                    class="text-muted"
                    style="float: left; padding: 0 10px 0 10px;"
                    >Kolicina: {{ cart.kolicina }}m

                    <br />Duzina: {{ cart.duzina }}cm
                  </small>
                </div>
              </div>
            </li>

            <!-- END PRODUCT -->
          </ul>
          <div class="" v-if="carts"></div>
        </div>
      </div>
    </div>
    <div class="desno">
      <div class="desniNaslov">
        <div class="">
          <div class="overlej">
            <span class="cijena">Konačna cijena: </span>

            <p style="color:#fff; padding:5px; ">{{ konacnaCijena }}kn</p>
          </div>
        </div>
        <div class="" style="width: 100%;">
          <div class="" style="padding:10px">
            <a
              href=""
              class="btn btn-success"
              style="background: #212529;border-color:#daa520;border-style:solid;border-width:1px;font-color:#fff;"
              >Checkout</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

/*max-width: 960px; min-width: 500px;top: 10px; position: fixed; */

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
        quantity: 1,
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
  button {
    background: #f5f5f5;
    color: #888;
    font-size: 12px;
    cursor: pointer;
    background: #212529;
  }
  p {
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .cashout {
    max-width: 960px;
    min-width: 500px;
    padding: 10px;
    margin: 0 auto;
    background: #212529;
  }
  .cjeli {
    width: 60.6382978723%;
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .naslov {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    padding: 0 30px;
  }
  .stavke {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    padding: 0 30px;
  }
  ul {
    padding: 10px;
    min-height: 140px;
    position: relative;
    color: #fff;
    border-width: 0px 0px 3px 0px;
    border-style: solid;
  }
  li {
    padding: 0px 20px;
    height: 200px;
    font-size: 1.2em;
    list-style: none;
    list-style-image: none;
    margin: 0;
    margin-bottom: 0px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .span1 {
    float: left;
    font-size: 30px;
    height: 140px;
    vertical-align: top;
    float: left;
    width: 110px;
  }
  .btnBrisanje {
    padding: 0 20px;
    float: right;
    margin-right: 5px;
    background: #212529;
  }
  input {
    width: 2.5rem;
    text-align: center;
    background: #212529;
    color: #fff;
  }
  .desno {
    max-width: 370px;
    padding-left: 10px;
    transform: translate3d(0, 0, 0);
    top: 0 !important;
    width: 39.3617021277%;
    width: 39.5833333333%;
    display: inline-block;
  }
  .desniNaslov {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
  }
  .cijena {
    border-width: 0px 0px 3px 0px;
    border-style: solid;
    width: 100%;
    color: #fff;
  }
  .overlej {
    padding: 26px 30px 16px;
    padding: 20px;
  }
  @media (max-width: 962px) {
    .cjeli {
      width: 100%;
      display: block;
    }
    .cashout {
      min-width: 360px;
      padding: 0px;
      margin: 0;
    }
    .naslov {
      padding: 0px;
    }
  }
</style>
