import Vue from 'vue';
import VueMeta from 'vue-meta';

import { router } from "./router";
import App from './layouts/Main.vue';

Vue.use(VueMeta, {
  keyName: 'head'
});

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});


