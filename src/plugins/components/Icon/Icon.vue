<template>
  <i :class="{ [name]: true, ['loading']: isLoading }" :style="iconStyle"></i>
</template>

<script>
import { PREFIX } from '../../utils/constant'
export default {
  name: 'icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    color: String,
  },
  data() {
    return {
      loadingList: [
        `${PREFIX}icon-loading1`,
        `${PREFIX}icon-loading2`,
        `${PREFIX}icon-loading3`,
        `${PREFIX}icon-91jiazai`,
        `${PREFIX}icon-Loading`,
        `${PREFIX}icon-loading4`,
        `${PREFIX}icon-loading5`,
      ],
    }
  },
  computed: {
    isLoading() {
      return this.loadingList.includes(this.name)
    },
    iconStyle() {
      return {
        color: this.color,
      }
    },
  },

  methods: {},
}
</script>

<style lang="less" scoped>
.loading {
  animation: loading 0.8s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
