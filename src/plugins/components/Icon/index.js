import Icon from './icon'
import { PREFIX } from '../../utils/constant'

Icon.install = Vue => {
  Vue.component(PREFIX + Icon.name, Icon)
}

export default Icon
