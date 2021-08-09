import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import * as filters from './filters'
import './assets/iconfont/iconfont.css'

import loading from './plugins/directive/loading'

import loadingService from './plugins/components/Loading/service'
Vue.prototype.$loading = loadingService

Vue.use(loading)

import xiao from './plugins'
// import xiao from '@rucimiren/xiao-ui'
// import '@rucimiren/xiao-ui/lib/xiao.css'
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
