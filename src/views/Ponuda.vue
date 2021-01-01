<template>
  <div>
    <product-card v-for="card in cards" :key="card" :info="card" />
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
      "Drvo za ogrijev bukva, odlično za brzo podizanje temperature. Veličinu i količinu birate sami.",
    cijena: "430kn/m",
  },
  {
    url: "https://i.ibb.co/nb7gNsY/grab.jpg",
    naslov: "Grab",
    podnaslov: "Drvo za ogrijev grab",
    opis:
      "Drvo za ogrijev grab, odlično za držanje visoke temperature gorenja na duže vrijeme. Veličinu i količinu birate sami.",
    cijena: "430kn/m",
  },
  {
    url: "https://ibb.co/Dt9VHDv",
    naslov: "Jasen",
    podnaslov: "Drvo za ogrijev jasen",
    opis:
      "Najbolje u kombinaciji sa grabom/bukvom za odlične rezultate dugoročnog gorijenja. Veličinu i količinu birate sami.",
    cijena: "380kn/m",
  },
  {
    url: "https://ibb.co/Dt9VHDv",
    naslov: "Hrast",
    podnaslov: "Drvo za ogrijev hrast",
    opis:
      "Najbolje drvo, uz bukvu i grab, za hladne zimske dane (pogotovo ako je suho). Veličinu i količinu birate sami.",
    cijena: "400kn/m",
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
