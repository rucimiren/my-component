import SerialAnimation from './SerialAnimation.vue'
import { PREFIX } from '../../utils/constant'

SerialAnimation.install = Vue => {
  Vue.component(PREFIX + SerialAnimation.name, SerialAnimation)
}

export default SerialAnimation
