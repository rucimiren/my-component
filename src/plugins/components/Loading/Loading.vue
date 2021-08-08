<template>
  <div
    v-if="visible"
    class="
      w-full
      h-full
      absolute
      left-0
      top-0
      bg-black-f85
      flex
      justify-center
      items-center
      z-index-2000
    "
  >
    <Icon name="xiao-icon-loading2" color="white" />
  </div>
</template>

<script>
import Icon from '../Icon/Icon.vue'
export default {
  components: {
    Icon,
  },
  data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: '',
    }
  },

  methods: {
    handleAfterLeave() {
      this.$emit('after-leave')
    },
    setText(text) {
      this.text = text
    },
  },
}
</script>
