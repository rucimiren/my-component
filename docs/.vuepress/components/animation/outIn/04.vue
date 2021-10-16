<template>
  <div>
    <button @click="onShow = !onShow">显示/隐藏</button>
    <div class="ani-admission-04" :class="{ show: onShow }">
      <div class="admission-box"></div>
      <div class="admission-icon"></div>
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
button {
  border: none;
  outline: none;
  padding: 6px 15px;
  border-radius: 4px;
  background: #2c68ff;
  color: white;
  margin-bottom: 50px;
}

// SCSS_VAR_START
@Company: 1px; // 单位基数
@admission-04-timeA: 0.7s; // 过渡时间
// SCSS_VAR_END

.ani-admission-04 {
  position: relative;
  width: 400px;
  height: 600px;
  top: 50px;
  left: 240px;
  .admission-box {
    width: 400 * @Company;
    height: 400 * @Company;
    // background: #fff;
    background: #000;
    transform: scale(1.4);
    top: 0;
    position: absolute;
    right: 0;
    transform-origin: calc(100% - (10 * @Company)) 150px;
  }
  .admission-icon {
    width: 40 * @Company;
    height: 40 * @Company;
    background: rgba(255, 255, 255, 0.2)
      url(http://yaru.vip:8080/images/animation/outIn/20ff1d94fc60867e.png)
      center/(40 * @Company) no-repeat;
    position: absolute;
    right: 10 * @Company;
    top: 150px;
    margin-top: -20 * @Company;
    opacity: 0;
    padding: 10 * @Company;
    border-radius: 50%;
  }
  &.show {
    .admission-box {
      transition: transform @admission-04-timeA ease-out,
        border-radius @admission-04-timeA ease-out,
        opacity @admission-04-timeA linear;
      transform: scale(0.15);
      border-radius: 200 * @Company;
      opacity: 0;
    }
    .admission-icon {
      transition: opacity @admission-04-timeA 0.2s linear;
      opacity: 1;
    }
  }
}
</style>
