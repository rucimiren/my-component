import DatePicker from './components/datePicker/datePicker.vue'
import SerialAnimation from './components/serialAnimation/serialAnimation.vue'
import Icon from './components/icon/icon.vue'
import Scrollbar from './components/Scrollbar/scrollbar'
import loadingDirective from './components/loading/directive'
import loadingService from './components/loading/service'
import { PREFIX } from './utils/constant'

import './index.less'

const Components = [DatePicker, SerialAnimation, Icon, Scrollbar]

const install = Vue => {
  if (install.installed) return

  Vue.use(loadingDirective)
  Vue.prototype.$loading = loadingService(Vue)

  Components.forEach(component =>
    Vue.component(PREFIX + component.name, component),
  )
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ...Components,
}
