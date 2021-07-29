import filters from '../../src/filters'
import DemoBlock from './components/DemoBlock.vue'
import Xq from '../../src/plugins'

export default ({Vue}) => {
  Vue.use(Xq)
  Vue.component('DemoBlock', DemoBlock)
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}
