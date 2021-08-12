// import Scrollbar from './Scrollbar'
import Scrollbar from './main'
import { PREFIX } from '../../utils/constant'

Scrollbar.install = Vue => {
  Vue.component(PREFIX + Scrollbar.name, Scrollbar)
}

export default Scrollbar
