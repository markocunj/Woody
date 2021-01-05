<template>
  <div class="col-md-3 mb-4">
    <div class="container mx-auto">
      <div class="product">
        <div class="card-body pt-4">
          <h4 class="card-title">{{ info.naslov }}</h4>
          <h6 class="mb-2 ">{{ info.podnaslov }}</h6>
          <p class="card-text">
            {{ info.opis }}
          </p>
          <div class="options d-flex flex-fill">
            <input name="" class="custom-select ml-1" placeholder="Količina" />
            <select class="custom-select ml-1">
              <option selected>Veličina</option>
              <option value="1">25</option>
              <option value="2">33</option>
              <option value="3">45</option>
            </select>
          </div>
          <div class="buy d-flex justify-content-between align-items-center">
            <div class="price text-success">
              <h5 class="mt-4" style="color: black; font-weight: bold;">
                {{ info.cijena }}
              </h5>
            </div>
            <a
              href="#"
              class="btn btn-secondary mt-1  btn-sm mr-1 mb-2"
              style=""
              ><i class="fas fa-shopping-cart"></i> Add to Cart</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #daa520;
  background-image: url("../assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.7;
  width: 100%;
  height: 500px;
}
.col-md-3 {
  margin-top: 1vw;
}
.card-text {
  height: 12vh;
}
.product {
  background-color: #daa520;
  margin-left: 30px;
  margin-right: 30px;
}
.col-mid-3 img {
  width: 70%;
}
.align-items-center {
  -ms-flex-align: center !important;
  align-items: center !important;
}
.justify-content-around {
  -ms-flex-pack: distribute !important;
  justify-content: space-around !important;
}
.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}
.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
img {
  vertical-align: middle;
  border-style: none;
  padding: 30px 30px 0px 30px;
  box-shadow: 5vw white;
}
*,
::after,
::before {
  box-sizing: border-box;
}
.text-center {
  text-align: center !important;
}
.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}
</style>

<script>
import background from "@/assets/background.jpg";
export default {
  props: ["info"],
  name: "ProductCard",
};
</script>
