import Vue from 'vue';

import './plugins';

import App from './app/app.vue';
import Embed from 'v-video-embed'


import './main.scss';
import router from './app/app-routes';
import store from './app/app-state';
// global register
Vue.use(Embed);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
