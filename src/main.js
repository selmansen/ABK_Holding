import Vue from 'vue';
import VueMeta from 'vue-meta';

import { router } from "./router";
import App from './layouts/Main.vue';

Vue.use(VueMeta, {
  keyName: 'head'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});

