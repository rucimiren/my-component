<template>
  <div>
    <button @click="onShow = !onShow">显示/隐藏</button>
    <div class="ani-admission-05" :class="{ show: onShow }">
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
@admission-05-time: 0.5s; // 过渡时间
// SCSS_VAR_END

.ani-admission-05 {
  width: 200px;
  height: 200px;
  position: relative;
  .admission-icon {
    width: 40 * @Company;
    height: 40 * @Company;
    background: rgba(255, 255, 255, 0.2)
      url(http://yaru.vip:8080/images/animation/outIn/20ff1d94fc60867e.png)
      center/(40 * @Company) no-repeat;
    position: absolute;
    right: -40 * @Company;
    top: 150px;
    margin-top: -20 * @Company;
    opacity: 0;
    padding: 10 * @Company;
    border-radius: 50%;
    transition: opacity @admission-05-time 0.2s linear,
      transform @admission-05-time 0.2s ease-out;
  }
  &.show {
    .admission-icon {
      transform: translateX(-50 * @Company);
      opacity: 1;
    }
  }
}
</style>
