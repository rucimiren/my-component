<template>
  <div>
    <div class="content">
      <div class="ani-special-01">
        <div class="d1"></div>
        <div class="d2"></div>
        <span class="s1"></span>
        <span class="s2"></span>
        <span class="s3"></span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  margin: auto;
  height: 400px;
  position: relative;
  width: 270px;
  border-radius: 4px;
  background: url(http://yaru.vip:8080/images/animation/customization/01/05.png)
    0px 0px / cover no-repeat;
}
// SCSS_VAR_START: ;
@Company: 1.5px; // 单位基数
// SCSS_VAR_END
.ani-special-01 {
  width: 180 * @Company;
  height: 180 * @Company;
  position: relative;
  bottom: -120px;
  .d1 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url(http://yaru.vip:8080/images/animation/customization/01/03.png)
      center center/(180 * @Company) auto no-repeat;
    z-index: 1;
    position: relative;
  }
  .d2 {
    width: 60 * @Company;
    height: 75 * @Company;
    position: absolute;
    top: 20 * @Company;
    left: 55 * @Company;
    overflow: hidden;
    filter: blur(7 * @Company);
    border-radius: 30 * @Company;
    opacity: 0.5;
    animation: ani-special-01-v1 6s linear infinite;
    transform-origin: center bottom;
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: absolute;
      left: 0;
      bottom: -25 * @Company;
      box-shadow: 0 0 0 30 * @Company #fff11b;
    }
  }
  span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -15 * @Company;
    opacity: 0;
    z-index: 2;
    transform: translateY(0);
    &.s1 {
      animation: ani-special-01 2s 0.3s linear infinite;
      background: url(http://yaru.vip:8080/images/animation/customization/01/01.png)
        center center/(180 * @Company) auto no-repeat;
    }

    &.s2 {
      animation: ani-special-01 1.5s linear infinite;
      background: url(http://yaru.vip:8080/images/animation/customization/01/02.png)
        center center/(180 * @Company) auto no-repeat;
    }

    &.s3 {
      animation: ani-special-01 1.5s 0.75s linear infinite;
      background: url(http://yaru.vip:8080/images/animation/customization/01/04.png)
        center center/(180 * @Company) auto no-repeat;
    }
  }
}

@keyframes ani-special-01 {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  20% {
    opacity: 1;
    transform: translateY(-9 * @Company);
  }
  80% {
    opacity: 1;
    transform: translateY(-36 * @Company);
  }
  100% {
    opacity: 0;
    transform: translateY(-45 * @Company);
  }
}

@keyframes ani-special-01-v1 {
  0%,
  50%,
  100% {
    transform: skewX(0deg) skewY(0deg);
    opacity: 0.6;
  }
  25% {
    transform: skewX(10deg) skewY(10deg);
    opacity: 0.4;
  }
  75% {
    transform: skewX(-10deg) skewY(-10deg);
    opacity: 0.4;
  }
}
</style>
