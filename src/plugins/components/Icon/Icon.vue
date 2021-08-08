<template>
  <i
    class="inline-block"
    :class="{ [name]: true, ['loading']: isLoading }"
    :style="iconStyle"
  ></i>
</template>

<script>
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
        'xiao-icon-loading1',
        'xiao-icon-loading2',
        'xiao-icon-loading3',
        'xiao-icon-91jiazai',
        'xiao-icon-Loading',
        'xiao-icon-loading4',
        'xiao-icon-loading5',
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
