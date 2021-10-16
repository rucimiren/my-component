<template>
  <div>
    <button @click="onShow = !onShow">显示/隐藏</button>
    <div
      class="ani-admission-02"
      :class="{ 'box-in': onShow, 'box-out': !onShow }"
    ></div>
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
@admission-02-time: 0.6s; // 过渡时间
// SCSS_VAR_END

.ani-admission-02 {
  border-radius: 8px;
  // background: url(http://yaru.vip:8080/images/animation/outIn/a0817289458410fc.png)
  background: url(http://yaru.vip:8080/images/family/19.jpg) 0 0 / cover
    no-repeat;
  width: 150 * @Company;
  height: 150 * @Company;
  transform: translateY(-200 * @Company) rotate(-10deg);
  // 以上需自行修改所要UI样式

  opacity: 0;
  transform-origin: 100% 100%;
  &.box-in {
    animation: ani-admission-02 @admission-02-time linear forwards;
  }
  &.box-out {
    transform-origin: 0 100%;
    animation: ani-admission-02-2 @admission-02-time linear forwards;
  }
}

@keyframes ani-admission-02 {
  0% {
    transform: translateY(-200 * @Company) rotate(-10deg);
    opacity: 0;
    animation-timing-function: cubic-bezier(0, 0, 0, 1.4);
  }

  70% {
    transform: translateY(0) rotate(-10deg);
  }

  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
}

@keyframes ani-admission-02-2 {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }
  70% {
    transform: translateY(-40 * @Company) rotate(10deg);
    opacity: 1;
  }
  100% {
    transform: translateY(200 * @Company) rotate(10deg);
    opacity: 0;
  }
}
</style>
