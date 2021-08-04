import DatePicker from '../views/DatePicker/components'
import SerialAnimation from '../views/SerialAnimation/components'
import Icon from '../views/Icon/components'

const prefix = 'xiao-'
const Components = [DatePicker, SerialAnimation, Icon]

export default {
  install(Vue) {
    Components.forEach(component =>
      Vue.component(prefix + component.name, component),
    )
  },
}
