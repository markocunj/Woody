<template>
  <div class="red">
    <product-card v-for="(card, idx) in cards" :key="idx" :info="card" />
  </div>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";

let cards = [];

cards = [
  {
    url: "https://i.ibb.co/nb7gNsY/grab.jpg",
    naslov: "Bukva",
    podnaslov: "Drvo za ogrijev bukva",
    opis:
      "Drvo za ogrijev bukva, odlično za brzo podizanje temperature. Dužinu i količinu birate sami.",
    cijena: 430,
    id: "BKV",
  },
  {
    url: "https://i.ibb.co/nb7gNsY/grab.jpg",
    naslov: "Grab",
    podnaslov: "Drvo za ogrijev grab",
    opis:
      "Drvo za ogrijev grab, odlično za držanje visoke temperature gorenja na duže vrijeme. Dužinu i količinu birate sami.",
    cijena: 430,
    id: "GRB",
  },
  {
    url: "https://i.ibb.co/nb7gNsY/grab.jpg",
    naslov: "Jasen",
    podnaslov: "Drvo za ogrijev jasen",
    opis:
      "Najbolje u kombinaciji sa grabom/bukvom za odlične rezultate dugoročnog gorijenja. Dužinu i količinu birate sami.",
    cijena: 380,
    id: "JSN",
  },
  {
    url: "https://i.ibb.co/nb7gNsY/grab.jpg",
    naslov: "Hrast",
    podnaslov: "Drvo za ogrijev hrast",
    opis:
      "Najbolje drvo, uz bukvu i grab, za hladne zimske dane (pogotovo ako je suho). Dužinu i količinu birate sami.",
    cijena: 400,
    id: "HRST",
  },
];

export default {
  name: "Ponuda",
  data() {
    return {
      cards,
    };
  },
  components: {
    ProductCard,
  },
};
</script>
<style scoped>
.red {
  display: flex;
  flex-wrap: wrap;
}
</style>
