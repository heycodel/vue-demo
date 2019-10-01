// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import './style/reset.css'
import axios from '../node_modules/axios'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

Vue.prototype.axios = axios
axios.defaults.baseURL = '/api'
axios.defaults.headers['Content-Type'] = 'application/json';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  axios,
  components: { App },
  template: '<App/>'
})
