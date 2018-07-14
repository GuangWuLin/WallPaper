// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'iview/dist/styles/iview.css';
import 'animate.css';
import "../static/css/hover.css";
import http from './utils/axios'
import VueLazyload from 'vue-lazyload'
import 'lib-flexible';
Vue.use(http)
Vue.use(VueLazyload, {
  loading: require('../static/img/32.jpeg')
})
Vue.prototype.$http = http;
Vue.config.productionTip = false;
require('./assets/js/mock.js');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
