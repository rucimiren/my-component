import SerialAnimation from './serialAnimation.vue'
import { PREFIX } from '../../utils/constant'

SerialAnimation.install = Vue => {
  Vue.component(PREFIX + SerialAnimation.name, SerialAnimation)
}

export default SerialAnimation
