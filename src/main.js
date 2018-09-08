/* eslint-disable import/first */
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';

import ToolBar from './components/global/ToolBar';
import Footer from './components/global/Footer';

Vue.config.productionTip = false;

// Vue.component('toolBar', require('./components/ToolBar.vue'));
Vue.component('toolBar', ToolBar);
Vue.component('globalFooter', Footer);

Vue.use(VeeValidate);

Vue.use(
  Vuetify, {
    iconfont: 'mdi',
  },
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
