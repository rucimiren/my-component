import SerialAnimation from './SerialAnimation.vue'
import { prefix } from '../prefix'

SerialAnimation.install = Vue => {
  Vue.component(prefix + SerialAnimation.name, SerialAnimation)
}

export default SerialAnimation
