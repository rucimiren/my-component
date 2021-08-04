import Icon from './Icon'
import { prefix } from '../prefix'

Icon.install = Vue => {
  Vue.component(prefix + Icon.name, Icon)
}

export default Icon
