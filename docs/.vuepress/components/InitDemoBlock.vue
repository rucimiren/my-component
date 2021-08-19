<!--
 * 放PC端demo的容器，后边的vue、html、js源码代码块会被自动处理
-->
<template>
  <div ref="demo" class="InitDemoBlock">
    <div class="InitDemoBlock__view">
      <slot />
    </div>

    <div
      ref="code"
      name="source"
      class="InitDemoBlock__code"
      :style="codeWrapperStyle"
    >
      <div class="InitDemoBlock__handler">
        <button @click="open = !open">
          {{ open ? '隐藏代码' : '显示代码' }}
        </button>
        <button @click="handleCopy">复制代码</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { Message } from '@jdt/find'
import clipboardCopy from 'clipboard-copy'

export default {
  name: 'InitDemoBlock',
  data() {
    return {
      open: false,
      hasCode: false,
      nextElementSibling: null,
    }
  },
  computed: {
    codeWrapperStyle() {
      if (!this.hasCode) {
        return {
          height: 0,
        }
      }
      return {
        height: this.open ? 'auto' : 0,
        paddingTop: '60px',
      }
    },
  },
  async mounted() {
    await this.$nextTick()
    const el = this.$refs.demo
    const nextElementSibling = el.nextElementSibling
    const classList = nextElementSibling && nextElementSibling.classList
    if (
      classList &&
      (classList.contains('language-vue') ||
        classList.contains('language-html') ||
        classList.contains('language-js'))
    ) {
      this.$refs.code.appendChild(nextElementSibling)
      this.nextElementSibling = nextElementSibling
      this.hasCode = true
    }
  },
  methods: {
    handleCopy() {
      if (!this.hasCode) {
        return
      }

      try {
        let codeEl = this.nextElementSibling.children[0].children[0]

        if (codeEl) {
          clipboardCopy(codeEl.textContent)
            .then(() => {
              // Message.success('复制成功')
              window.alert('复制成功')
            })
            .catch(() => {
              // Message.success('复制失败，请重试')
              window.alert('复制失败，请重试')
            })
        }
      } catch (err) {
        // Message.success('复制失败，找不到源码')
        window.alert('复制失败，找不到源码')
      }
    },
  },
}
</script>

<style lang="less" scoped>
.InitDemoBlock {
  margin: 30px 0 50px;
  transition: all 0.4s;

  &:hover {
    // box-shadow: 5px 5px 5px rgba(200, 199, 199, 0.8);
    box-shadow: -5px 0px 5px #2c68ff, 0px -5px 5px #f52f3e, 5px 0px 5px #ff9c00,
      0px 5px 5px #0ed57d;
  }

  &__view {
    padding: 20px;
    border: 1px solid #ebebeb;
  }

  &__code {
    position: relative;
    overflow: hidden;

    /deep/ .language-vue,
    /deep/ .language-js,
    /deep/ .language-html {
      height: initial !important;
      margin: 0;
      border: 0;
      border-radius: 0;
    }
  }

  &__handler {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border: 1px solid #ebebeb;
    border-top: 0;
    text-align: center;
    background: #fff;
    z-index: 5;
    font-size: 14px;

    button {
      width: calc(100% / 2 - 20px);
      height: 100%;
      border: 0;
      background: none;
      color: rgba(#000, 0.2);
      &:hover {
        color: #409eff;
      }
      &:first-child {
        text-align: right;
      }
      &:last-child {
        text-align: left;
      }
    }
  }
}
</style>
