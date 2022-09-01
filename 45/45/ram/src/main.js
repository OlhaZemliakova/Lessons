import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "vue-axios"
import VueAxios from "vue-axios";

Vue.config.productionTip = false;


Vue.use(VueAxios,axios)
// Vue.use(Bootstrap)


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
