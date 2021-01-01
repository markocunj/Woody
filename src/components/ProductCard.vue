<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8 col-md-6 col-lg-4">
        <div class="card">
          <img class="card-img" :src="info.url" />
          <div class="card-body">
            <h4 class="card-title">{{ info.naslov }}</h4>
            <h6 class="card-subtitle mb-2 text-muted">{{ info.podnaslov }}</h6>
            <p class="card-text">
              {{ info.opis }}
            </p>
            <div class="options d-flex flex-fill">
              <input
                name=""
                class="custom-select ml-1"
                placeholder="Količina"
              />
              <select class="custom-select ml-1">
                <option selected>Veličina</option>
                <option value="1">25</option>
                <option value="2">33</option>
                <option value="3">45</option>
              </select>
            </div>
            <div class="buy d-flex justify-content-between align-items-center">
              <div class="price text-success">
                <h5 class="mt-4">{{ info.cijena }}</h5>
              </div>
              <a href="#" class="btn btn-danger mt-3"
                ><i class="fas fa-shopping-cart"></i> Add to Cart</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 20px;
  margin-bottom: 20px;
}
body {
  padding: 2rem 0rem;
}

.like {
  font-size: 1.5rem;
}
</style>

<script>
export default {
  props: ["info"],
  name: "ProductCard",
};
</script>
