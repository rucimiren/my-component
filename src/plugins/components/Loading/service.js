import loadingVue from './loading.vue'
import { getStyle } from '../../utils'

const loadingService = Vue => {
  const LoadingConstructor = Vue.extend(loadingVue)

  let fullscreenLoading

  LoadingConstructor.prototype.close = function () {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.$destroy()
    fullscreenLoading = null
    this.visible = false
  }
  const Loading = (options = {}) => {
    if (options.fullscreen && fullscreenLoading) {
      return fullscreenLoading
    }

    let instance = new LoadingConstructor({
      el: document.createElement('div'),
      data: options,
    })
    let parent = document.body
    if (options.target) {
      parent = document.querySelector(options.target)
      if (getStyle(parent, 'position') === 'static') {
        parent.style.position = 'relative'
      }
    }

    parent.appendChild(instance.$el)

    Vue.nextTick(() => {
      instance.visible = true
    })

    if (options.fullscreen) {
      fullscreenLoading = instance
    }

    return instance
  }
  return Loading
}

export default loadingService
