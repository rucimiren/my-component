<template>
  <div class="w-full">
    <div
      v-for="(v, i) in xiaoIconList"
      class="
        border-b border-l border-solid
        h-150
        inline-flex
        justify-center
        items-center
        flex-col
        w-1/4
        px-10
        text-gray-7
        hover:text-base
      "
      style="border-color: #ebebeb"
      :class="{
        'border-t': i < 4,
        'border-r': (i + 1) % 4 === 0 || i === xiaoIconList.length - 1,
      }"
      :key="v"
    >
      <xiao-icon class="text-20" :name="v" />
      <span
        class="
          text-14
          w-full
          whitespace-nowrap
          overflow-ellipsis overflow-hidden
          text-center
          mt-4
        "
        :title="v"
        >{{ v }}</span
      >
      <span
        class="text-14 text-gray-6 cursor-pointer hover:text-base mt-4"
        @click="handleCopy(v)"
        >点击复制</span
      >
    </div>
  </div>
</template>

<script>
import clipboardCopy from 'clipboard-copy'
const xiaoIcon = require('../../assets/iconfont/iconfont.json')
// console.log('iconList', xiaoIcon)
export default {
  name: 'Index',

  data() {
    const prefix = xiaoIcon.css_prefix_text
    const xiaoIconList = xiaoIcon.glyphs.map(v => prefix + v.font_class)
    // console.log('xiaoIconList', xiaoIconList)
    return {
      xiaoIconList,
    }
  },

  methods: {
    handleCopy(text) {
      try {
        clipboardCopy(text)
          .then(() => {
            window.alert('复制成功')
          })
          .catch(() => {
            window.alert('复制失败，请重试')
          })
      } catch (err) {
        window.alert('复制失败，找不到源码')
      }
    },
  },
}
</script>

<style lang="less" scoped></style>
