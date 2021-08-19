import InitDemoBlock from './components/InitDemoBlock.vue'
import xiao from '../../src/plugins'
// import xiao from '@rucimiren/xiao-ui'
// import '@rucimiren/xiao-ui/lib/xiao.css'


export default ({Vue}) => {
  Vue.use(xiao)
  Vue.component('InitDemoBlock', InitDemoBlock)
}
