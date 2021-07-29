<template>
  <div class="flex">
    <div class="w-200 h-screen bg-black-f85">
      <router-link
        v-for="v in textList"
        :key="v.text"
        class="
          block
          w-full
          h-40
          flex
          justify-center
          items-center
          hover:bg-primary
          text-white
          border-b border-solid border-black-f45
        "
        exact-active-class="bg-primary"
        :to="v.path"
        >{{ v.text }}</router-link
      >
    </div>
    <div class="flex-1 p-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      textList: [
        { path: '/', text: '首页' },
        { path: '/DatePicker', text: '日期选择' },
        { path: '/SerialAnimation', text: '序列帧动画' },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped></style>
