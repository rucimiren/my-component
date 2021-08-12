import DatePicker from './components/DatePicker/DatePicker.vue'
import SerialAnimation from './components/SerialAnimation/SerialAnimation.vue'
import Icon from './components/Icon/Icon.vue'
import Scrollbar from './components/Scrollbar/scrollbar'
import loadingDirective from './components/Loading/directive'
import loadingService from './components/Loading/service'
import { PREFIX } from './utils/constant'

// plugins文件夹之外的
import '../assets/css/index.css'
import '../assets/iconfont/iconfont.css'

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
