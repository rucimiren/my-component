import DatePicker from './datePicker'
import { PREFIX } from '../../utils/constant'

DatePicker.install = Vue => {
  Vue.component(PREFIX + DatePicker.name, DatePicker)
}

export default DatePicker
