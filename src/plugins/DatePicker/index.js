import DatePicker from './DatePicker'
import { prefix } from '../prefix'

DatePicker.install = Vue => {
  Vue.component(prefix + DatePicker.name, DatePicker)
}

export default DatePicker
