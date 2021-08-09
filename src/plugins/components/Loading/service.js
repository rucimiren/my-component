import Vue from 'vue'
import loadingVue from './Loading.vue'

const LoadingConstructor = Vue.extend(loadingVue)

let fullscreenLoading

LoadingConstructor.prototype.close = function () {
  setTimeout(() => {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.$destroy()
  }, 3000)
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

  parent.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
  })

  if (options.fullscreen) {
    fullscreenLoading = instance
  }

  return instance
}

export default Loading
