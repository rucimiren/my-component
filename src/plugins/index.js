import DatePicker from '../views/DatePicker/components'
import SerialAnimation from '../views/SerialAnimation/components'

const Components = [DatePicker, SerialAnimation]

export default {
  install(Vue) {
    Components.forEach(component => Vue.component(component.name, component))
  },
}
