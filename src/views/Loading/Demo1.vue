<template>
  <div v-loading.fullscreen="fullscreenLoading">
    <div class="text-14 mb-10">
      当使用指令方式时，全屏遮罩需要添加fullscreen修饰符（遮罩会插入至 body
      上）; 当使用服务方式时，遮罩默认即为全屏，无需额外设置。
    </div>
    <div class="flex">
      <div
        class="
          w-100
          h-40
          rounded-4
          bg-primary
          text-white
          flex
          justify-center
          items-center
          mr-10
          cursor-pointer
        "
        @click="directive"
      >
        指令模式
      </div>
      <div
        class="
          w-100
          h-40
          rounded-4
          bg-primary
          text-white
          flex
          justify-center
          items-center
          cursor-pointer
        "
        @click="service"
      >
        服务模式
      </div>
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

<style lang="less" scoped></style>
