// import Scrollbar from './Scrollbar'
import Scrollbar from './scrollbar'
import { PREFIX } from '../../utils/constant'

Scrollbar.install = Vue => {
  Vue.component(PREFIX + Scrollbar.name, Scrollbar)
}

export default Scrollbar
