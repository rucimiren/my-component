<template>
  <div class="icon">
    <div
      v-for="(v, i) in xiaoIconList"
      class="icon__container"
      :class="{
        'icon__container-border-t': i < 4,
        'icon__container-border-r':
          (i + 1) % 4 === 0 || i === xiaoIconList.length - 1,
      }"
      :key="v"
    >
      <xiao-icon size="20" :name="v" />
      <span class="icon__container__icon-name" :title="v">{{ v }}</span>
      <span class="icon__container__copy" @click="handleCopy(v)">点击复制</span>
    </div>
  </div>
</template>

<script>
import clipboardCopy from 'clipboard-copy'
const xiaoIcon = require('../../plugins/assets/xiao-icons/xiao-icons.json')
export default {
  name: 'Index',

  data() {
    const prefix = xiaoIcon.css_prefix_text
    const xiaoIconList = xiaoIcon.glyphs.map(v => prefix + v.font_class)
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

<style lang="less" scoped>
.icon {
  width: 100%;

  &__container {
    border-bottom: 1px solid #ebebeb;
    border-left: 1px solid #ebebeb;
    height: 150px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 25%;
    padding-left: 10px;
    padding-right: 10px;
    color: #8c8c8c;

    &-border-r {
      border-right: 1px solid #ebebeb;
    }

    &-border-t {
      border-top: 1px solid #ebebeb;
    }

    &:hover {
      color: #409eff;
    }

    &__icon-name {
      font-size: 14px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      margin-top: 4px;
    }

    &__copy {
      font-size: 14px;
      color: #bfbfbf;
      cursor: pointer;
      margin-top: 4px;

      &:hover {
        color: #409eff;
      }
    }
  }
}
</style>
