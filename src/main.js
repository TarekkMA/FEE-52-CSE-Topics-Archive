import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import linkify from "vue-linkify";

Vue.directive("linkified", linkify);

Vue.use(Buefy);
//Vue.use(VueRouter);

Vue.config.productionTip = false;

// const router = new VueRouter({
//   routes: [
//     { path: "/", component: Home },
//     { path: "/topic/", component: Topic }
//   ]
// });

new Vue({
  //router,
  render: h => h(App)
}).$mount("#app");
