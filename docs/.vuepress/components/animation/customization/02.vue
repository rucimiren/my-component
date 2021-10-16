<template>
  <div>
    <button @click="onShow = !onShow">显示/隐藏</button>
    <div class="day15" :class="{ show: onShow }">
      <div class="main"></div>
      <div class="coin">
        <span class="left"></span>
        <span class="right"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      onShow: false,
    }
  },
}
</script>
<style lang="less" scoped>
// SCSS_VAR_START
@Company: 30px;
@mainTime: 1.6s;
@coinTime: 2s;
// SCSS_VAR_END
button {
  border: none;
  outline: none;
  padding: 6px 15px;
  border-radius: 4px;
  background: #2c68ff;
  color: white;
}
.day15 {
  display: flex;
  height: 400px;
  align-items: center;
  justify-content: center;
  // overflow: hidden;
  .main {
    width: 198px;
    height: 278px;
    // background-image: url('http://yaru.vip:8080/images/animation/customization/02/group01.png');
    background-image: url('http://yaru.vip:8080/images/family/12.jpg');
    background-size: 100% 100%;
    z-index: 1;
    transform: scale(0);
  }
  .coin {
    position: absolute;
    width: 192px;
    height: 240px;
    transform: scale(0);
    z-index: 2;
    span {
      display: block;
      position: absolute;
    }
    .left {
      width: 50px;
      height: 50px;
      top: 140px;
      left: -25px;
      background: url('http://yaru.vip:8080/images/animation/customization/02/coin-bi.png')
        no-repeat;
      background-size: 100%;
    }
    .right {
      width: 22px;
      height: 22px;
      top: 120px;
      right: -15px;
      background: url('http://yaru.vip:8080/images/animation/customization/02/coin-small.png')
        no-repeat;
      background-size: 100%;
    }
  }
  &.show {
    .main {
      animation: day-scale @mainTime ease-out forwards;
    }
    .coin {
      animation: day-icon-scale @coinTime ease-out forwards;
    }
  }
  @keyframes day-scale {
    // 缩放
    0% {
      transform: scale(0);
    }
    21% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.012);
    }
    43% {
      transform: scale(1);
    }
    56% {
      transform: scale(1.008);
    }
    70% {
      transform: scale(1);
    }
    84% {
      transform: scale(1.004);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes day-icon-scale {
    0% {
      transform: scale(0);
    }
    5% {
      transform: scale(1);
    }
    20% {
      transform: scale(1.05);
    }
    28% {
      transform: scale(1);
    }
    38% {
      transform: scale(1.02);
    }
    48% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.01);
    }
    72% {
      transform: scale(1);
    }
    86% {
      transform: scale(1.006);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
