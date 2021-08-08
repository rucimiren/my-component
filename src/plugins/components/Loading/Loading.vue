<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="
        w-full
        h-full
        absolute
        left-0
        top-0
        bg-white-f85
        flex
        justify-center
        items-center
        flex-col
        z-index-2000
      "
      :class="[loadingCustomClass]"
      :style="loadingStyle"
    >
      <Icon
        class="text-30"
        :name="loadingClass ? loadingClass : 'xiao-icon-loading2'"
        :color="loadingColor ? loadingColor : '#2C68FF'"
      />
      <p v-if="loadingText" class="text-14" :style="textStyle">
        {{ loadingText }}
      </p>
    </div>
  </transition>
</template>

<script>
import Icon from '../Icon/Icon.vue'
export default {
  components: {
    Icon,
  },
  data() {
    return {
      loadingText: null,
      loadingClass: null,
      loadingColor: null,
      loadingBackground: null,
      // fullscreen: true,
      visible: false,
      loadingCustomClass: '',
    }
  },
  computed: {
    loadingStyle() {
      return {
        background: this.loadingBackground || 'rgba(255, 255, 255, 0.8)',
      }
    },
    textStyle() {
      return {
        color: this.loadingText
          ? this.loadingColor
            ? this.loadingColor
            : '#2C68FF'
          : '',
      }
    },
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
<style lang="less" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/*入场(离场)动画的时间段   */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
