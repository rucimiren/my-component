import { getStyle } from '../../utils'
import loadingVue from './Loading.vue'

const loadingDirective = {}
loadingDirective.install = Vue => {
  if (Vue.prototype.$isServer) return
  const Mask = Vue.extend(loadingVue)

  const toggleLoading = (el, binding) => {
    Vue.nextTick(() => {
      if (binding.value) {
        if (binding.modifiers.fullscreen) {
          insertDom(document.body, el, binding)
        } else {
          if (getStyle(el, 'position') === 'static') {
            el.style.position = 'relative'
          }
          insertDom(el, el, binding)
        }
      } else {
        el.instance.visible = false
      }
    })
  }

  const insertDom = (parent, el) => {
    el.instance.visible = true
    parent.appendChild(el.mask)
  }
  Vue.directive('loading', {
    bind: function (el, binding) {
      const loadingClass = el.getAttribute('xiao-loading-class')
      const loadingColor = el.getAttribute('xiao-loading-color')
      const loadingBackground = el.getAttribute('xiao-loading-background')
      const loadingText = el.getAttribute('xiao-loading-text')
      const loadingCustomClass = el.getAttribute('xiao-loading-customClass')
      const mask = new Mask({
        el: document.createElement('div'),
        data: {
          fullscreen: binding.modifiers.fullscreen,
          loadingClass,
          loadingColor,
          loadingBackground,
          loadingText,
          loadingCustomClass,
        },
      })
      el.instance = mask
      el.mask = mask.$el
      binding.value && toggleLoading(el, binding)
    },
    update: function (el, binding) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding)
      }
    },
    unbind: function (el) {
      el.instance && el.instance.$destroy()
    },
  })
}

export default loadingDirective
