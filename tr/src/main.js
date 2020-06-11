import Vue from 'vue';
import VueMeta from 'vue-meta';
import { router } from "./router";
import MarqueeText from 'vue-marquee-text-component'
 
import App from './layouts/Main.vue';
import './assets/scss/main.scss'; 


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

Vue.component('tabs', {
  template: `
      <div>
          <div class="tabs">
            <ul>
              <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                  <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
              </li>
            </ul>
          </div>

          <div class="tabs-details">
              <slot></slot>
          </div>
      </div>
  `,
  
  data() {
      return {tabs: [] };
  },
  created() {
      this.tabs = this.$children;
  },
  methods: {
      selectTab(selectedTab) {
          this.tabs.forEach(tab => {
              tab.isActive = (tab.name == selectedTab.name);
          });
      }
  }
});

Vue.component('tab', {
  template: `
      <div v-show="isActive"><slot></slot></div>
  `,
  props: {
      name: { required: true },
      selected: { default: false}
  },
  data() {
      return {
          isActive: false
      };
  },
  computed: {
      href() {
          return 'javascript:;';
      }
  },
  mounted() {
      this.isActive = this.selected;
  }
});

Vue.component('marquee-text', MarqueeText)

new Vue({
  el: '#app',
  render: h => h(App),
  router
});


