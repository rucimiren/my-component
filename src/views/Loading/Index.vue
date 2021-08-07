<template>
  <div class="w-full h-full border border-solid border-primary">
    <div v-for="v in 5" :key="v">{{ v }}</div>
    <div v-loading="show" class="w-200 h-200"></div>
    <div
      class="
        w-100
        h-40
        rounded-8
        bg-primary
        text-white
        flex
        justify-center
        items-center
      "
      @click="isShow"
    >
      close
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',

  data() {
    return {
      show: true,
    }
  },
  methods: {
    isShow() {
      this.show = !this.show
      console.log(this.show)
    },
  },
}
</script>

<style lang="less" scoped></style>
