<template>
  <div class="back" @click="$router.back()">
    <img
      v-if="type === 'IMG'"
      src="http://yaru.vip:8080/images/icon/back/back3.png"
      alt=""
    />
    <i
      v-if="type === 'ICON'"
      class="iconfont"
      :class="iconClass"
      :style="iconStyle"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'back',
  props: {
    type: {
      // IMG ICON
      type: String,
      default: 'ICON',
    },
    color: {
      type: String,
      default: '#2C68FF',
    },
    /*
      xq-icon-fanhui5 xq-icon-31fanhui1  xq-icon-fanhui  xq-icon-shangyiyehoutuifanhui-xianxingyuankuang
    */
    iconClass: {
      type: String,
      default: 'xq-icon-fanhui5',
    },
  },
  data() {
    return {}
  },
  computed: {
    iconStyle() {
      return {
        color: this.color,
      }
    },
  },
}
</script>

<style lang="less" scoped>
.back {
  width: 40px;
  height: 40px;
  text-align: center;
  position: fixed;
  left: 10px;
  top: 10px;
  border-radius: 50%;
  z-index: 9999999;
  // overflow: hidden;

  img {
    width: 100%;
  }
  i {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 0px;
    cursor: pointer;
    background-image: -webkit-linear-gradient(bottom, red, #ff5f60, #f0c41b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
