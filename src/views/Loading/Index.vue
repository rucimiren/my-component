<template>
  <div class="">
    <div
      v-loading="show"
      class="w-200 h-200 inline-block bg-primary mr-10"
      xiao-loading-class="xiao-icon-91jiazai"
      xiao-loading-text="加载中..."
      xiao-loading-customClass="customClassXiao"
    >
      show
    </div>
    <div
      v-loading="show2"
      xiao-loading-color="white"
      xiao-loading-text="玩命加载中..."
      xiao-loading-background="rgba(0,0,0,0.8)"
      class="w-200 h-200 inline-block bg-error"
    >
      show2
    </div>
    <div class="flex mt-10">
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
        "
        @click="isShow"
      >
        show
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
        "
        @click="isShow2"
      >
        show2
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
        "
        @click="isShow3"
      >
        服务
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',

  data() {
    return {
      show: false,
      show2: false,
      show3: null,
    }
  },
  methods: {
    isShow() {
      this.show = !this.show
    },
    isShow2() {
      this.show2 = !this.show2
    },
    isShow3() {
      this.show3 = this.$loading({})
      const startTime = new Date().getTime()
      setTimeout(() => {
        const endTime = new Date().getTime()
        console.log(endTime - startTime)
        this.show3.close()
        const lastTime = new Date().getTime()
        console.log(lastTime - startTime)
      }, 5000)
    },
  },
}
</script>

<style lang="less" scoped></style>
