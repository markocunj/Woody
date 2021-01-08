import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

window.addEventListener("beforeunload", function() {
  document.body.classList.add("animate-out");
});
