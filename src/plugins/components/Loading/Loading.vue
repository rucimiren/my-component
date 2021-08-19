<template>
  <transition name="fade">
    <div
      v-if="visible"
      :class="[`${prefix}loading`, loadingCustomClass]"
      :style="loadingStyle"
    >
      <Icon
        size="30"
        :name="loadingClass ? loadingClass : `${prefix}icon-loading2`"
        :color="loadingColor ? loadingColor : '#2C68FF'"
      />
      <p v-if="loadingText" :style="textStyle">
        {{ loadingText }}
      </p>
    </div>
  </transition>
</template>

<script>
import Icon from '../Icon/Icon.vue'
import { PREFIX } from '../../utils/constant'
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
      visible: false,
      loadingCustomClass: '',
      fullscreen: true,
    }
  },
  computed: {
    loadingStyle() {
      let position = {}
      if (this.fullscreen) {
        position = {
          position: 'fixed !important',
        }
      }

      return {
        ...position,
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
    prefix() {
      return PREFIX
    },
  },
}
</script>
