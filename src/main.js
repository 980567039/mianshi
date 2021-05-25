import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import 'lib-flexible'
import store from './store'
import router from './router'
import 'normalize.css'

Vue.prototype.$eventBus = new Vue()
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
