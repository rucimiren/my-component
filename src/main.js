import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import filters from './filters'

import DatePicker from '@/views/DatePicker/components'
Vue.use(DatePicker)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false

window.root = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
