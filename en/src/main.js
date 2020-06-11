import Vue from 'vue';
import VueMeta from 'vue-meta';
import MarqueeText from 'vue-marquee-text-component';
import { router } from "./router";

import App from './layouts/Main.vue';
import './assets/scss/main.scss'; 

Vue.use(VueMeta, {
  keyName: 'head'
});

Vue.component('marquee-text', MarqueeText);

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


