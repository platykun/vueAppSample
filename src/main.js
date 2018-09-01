/* eslint-disable import/first */
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';

import ToolBar from './components/ToolBar';

Vue.config.productionTip = false;

// Vue.component('toolBar', require('./components/ToolBar.vue'));
Vue.component('toolBar', ToolBar);

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
