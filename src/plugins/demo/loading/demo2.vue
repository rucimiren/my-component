<template>
  <div v-loading.fullscreen="fullscreenLoading">
    <div class="loading-demo__desc">
      当使用指令方式时，全屏遮罩需要添加fullscreen修饰符（遮罩会插入至 body
      上）; 当使用服务方式时，遮罩默认即为全屏，无需额外设置。
    </div>
    <div class="loading-demo__buttons">
      <div class="loading-demo__buttons-items" @click="directive">指令模式</div>
      <div class="loading-demo__buttons-items" @click="service">服务模式</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',

  data() {
    return {
      fullscreenLoading: false,
    }
  },
  methods: {
    directive() {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 3000)
    },
    service() {
      const serviceLoading = this.$loading()
      setTimeout(() => {
        serviceLoading.close()
      }, 3000)
    },
  },
}
</script>

<style lang="less" scoped>
.loading-demo {
  &__desc {
    font-size: 14px;
    margin-bottom: 10px;
  }

  &__buttons {
    display: flex;

    &-items {
      width: 100px;
      height: 40px;
      color: white;
      background-color: #2c68ff;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
</style>
