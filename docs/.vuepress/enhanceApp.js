import * as filters from '../../src/filters'
import InitDemoBlock from './components/InitDemoBlock.vue'
// import xiao from '../../src/plugins'
import xiao from '@rucimiren/xiao-ui'
import '@rucimiren/xiao-ui/lib/xiao.css'
import '../../src/assets/iconfont/iconfont.css'
export default ({Vue}) => {
  Vue.use(xiao)
  Vue.component('InitDemoBlock', InitDemoBlock)
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}
