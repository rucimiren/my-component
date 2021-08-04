import DatePicker from './DatePicker/DatePicker.vue'
import SerialAnimation from './SerialAnimation/SerialAnimation.vue'
import Icon from './Icon/Icon.vue'

import '../assets/css/tailwind.css'
import '../assets/iconfont/iconfont.css'
import * as filters from '../filters'

import { prefix } from './prefix'
const Components = [DatePicker, SerialAnimation, Icon]

const install = Vue => {
  if (install.installed) return

  Components.forEach(component =>
    Vue.component(prefix + component.name, component),
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
}
