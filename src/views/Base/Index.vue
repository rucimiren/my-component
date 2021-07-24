<template>
  <div class="flex">
    <div class="w-200 bg-black-f4">
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
          hover:text-primary
        "
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
      ],
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped></style>
