import DatePicker from './components/DatePicker/DatePicker.vue'
import SerialAnimation from './components/SerialAnimation/SerialAnimation.vue'
import Icon from './components/Icon/Icon.vue'

import '../assets/css/index.css'
import '../assets/iconfont/iconfont.css'
import * as filters from '../filters'

import { PREFIX } from './utils/constant'
const Components = [DatePicker, SerialAnimation, Icon]

const install = Vue => {
  if (install.installed) return

  Components.forEach(component =>
    Vue.component(PREFIX + component.name, component),
  )

  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ...Components,
}
