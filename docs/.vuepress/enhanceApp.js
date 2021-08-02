import filters from '../../src/filters'
import InitDemoBlock from './components/InitDemoBlock.vue'
import Xq from '../../src/plugins'

export default ({Vue}) => {
  Vue.use(Xq)
  Vue.component('InitDemoBlock', InitDemoBlock)
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}
