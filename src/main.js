import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import filters from './filters'

import Xq from './plugins'
Vue.use(Xq)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false

window.root = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
