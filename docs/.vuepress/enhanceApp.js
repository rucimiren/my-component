import filters from '../../src/filters'
import DemoBlock from './components/DemoBlock.vue'
import DatePicker from '../../src/views/DatePicker/components'

export default ({Vue}) => {
  Vue.use(DatePicker)
  Vue.component('DemoBlock', DemoBlock)
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}