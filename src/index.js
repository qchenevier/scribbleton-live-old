import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "@mdi/font/css/materialdesignicons.css";
import Buefy from "buefy";
import VueClipboard from "vue-clipboard2";

// VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard);
Vue.use(VueRouter);
Vue.use(Buefy);

const router = new VueRouter({
  mode: "history",
  routes: [{ path: "/", name: "App", component: App }]
});

new Vue({
  el: "#app",
  router
});
