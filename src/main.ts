import Vue from "vue";
import App from "./app.vue";
import router from "@/router";
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");