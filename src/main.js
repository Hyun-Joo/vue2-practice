import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VModal from 'vue-js-modal';

import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ko';

Vue.config.productionTip = false;

Vue.use(VModal, {dynamic: true});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
