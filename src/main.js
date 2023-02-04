import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueDragscroll from "vue-dragscroll";
import VueScrollReveal from "vue-scroll-reveal";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;
Vue.use(VueDragscroll);
Vue.use(VueScrollReveal);

new Vue({
  vuetify,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
