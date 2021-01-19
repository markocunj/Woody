<template>
  <li class="list-group-item d-flex justify-content-between lh-condensed">
    <div>
      <h6 class="my-0">{{ checkoutCartInfo.naslov }}</h6>
      <small class="text-muted">{{ checkoutCartInfo.podnaslov }} <br /></small>
      <small class="text-muted"
        >Kolicina: {{ checkoutCartInfo.kolicina }}m <br />Duzina:
        {{ checkoutCartInfo.duzina }}cm</small
      >
    </div>
    <span class="text-muted">{{ checkoutCartInfo.cijena }}kn</span>
  </li>
</template>

<script>
export default {
  name: "CheckoutCartItem",
  data() {
    return {};
  },
  props: ["checkoutCartInfo"],
};
</script>
