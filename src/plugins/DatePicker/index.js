import DatePicker from './DatePicker'
import { PREFIX } from '../constant'

DatePicker.install = Vue => {
  Vue.component(PREFIX + DatePicker.name, DatePicker)
}

export default DatePicker
