<template>
  <div class="col-md-3 mb-4">
    <div class="container">
      <div class="product">
        <div class="card-body pt-4">
          <h4 class="card-title">{{ info.naslov }}</h4>
          <h5
            class="mb-2"
            style="color: black; font-weight: bold;  padding: 10px"
          >
            <i class="fas fa-tag" style="color: red;"></i> {{ info.cijena }}
            <a style="color: #424949; font-weight: normal;">/metar</a>
          </h5>
          <h6 class="mb-2 ">{{ info.podnaslov }}</h6>

          <p class="card-text">
            {{ info.opis }}
          </p>
          <div class="options d-flex flex-fill">
            <input
              name=""
              class="custom-select ml-1"
              placeholder="Količina (u metrima)"
            />
            <select class="custom-select ml-1">
              <option selected>Dužina</option>
              <option value="1">25</option>
              <option value="2">33</option>
              <option value="3">45</option>
            </select>
          </div>
          <div class="buy d-flex justify-content-center align-items-center">
            <a
              href="#"
              class="btn btn-secondary mt-4  btn-sm mr-1 mb-2"
              style=""
              ><i class="fas fa-shopping-cart"></i> Dodavanje u košaricu</a
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
  width: 100%;
  height: 600px;
}
.container:hover {
  box-shadow: 0 8px 12px 0 #daa520;
}
.col-md-3 {
  margin-top: 1vw;
}
.card-text {
  height: 100px;
}
.product {
  background: #daa520;
  transform: translateY(30%);
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
.red {
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 1270px) {
  .col-md-3 {
    max-width: 100%;
  }
  .container {
    min-width: 345px;
  }
}
</style>

<script>
import background from "@/assets/background.jpg";
export default {
  props: ["info"],
  name: "ProductCard",
};
</script>
