import Icon from './Icon'
import { PREFIX } from '../constant'

Icon.install = Vue => {
  Vue.component(PREFIX + Icon.name, Icon)
}

export default Icon
