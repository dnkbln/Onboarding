import Vue from 'vue';
import App from './Onboarding.vue';
import { store } from './store/store'

new Vue({
  el: '#app',
  render: h => h(App),
  store
});
