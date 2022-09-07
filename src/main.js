import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import routes from "./routes";
import Cloudinary from "cloudinary-vue";
import axios from "axios";
import VueAxios from "vue-axios";
import storage from "./storage";

var token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "dp1czofyb",
    secure: true,
  },
});

Vue.use(VueRouter);

Vue.use(VueAxios, axios);

Vue.use(storage);

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
