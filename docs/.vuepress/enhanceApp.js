import filters from '../../src/filters'
import InitDemoBlock from './components/InitDemoBlock.vue'
import xiao from '../../src/plugins'
import '../../src/assets/iconfont/iconfont.css'
export default ({Vue}) => {
  Vue.use(xiao)
  Vue.component('InitDemoBlock', InitDemoBlock)
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}
