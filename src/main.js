import Vue from 'vue';
import App from './App.vue';
import './assets/css/reset.scss';
import router from './router';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
