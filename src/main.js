import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'
import 'lib-flexible/flexible'

import './assets/css/index.css'

// import xiao from './plugins'
import xiao from '@rucimiren/xiao-ui'
import '@rucimiren/xiao-ui/lib/xiao.css'

Vue.use(xiao)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false

window.root = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

/* setTimeout(() => {
  window.location.assign(
    `${window.location.origin}/sakura.html?targetUrl=${window.location.href}`,
  )
}, 5000) */
