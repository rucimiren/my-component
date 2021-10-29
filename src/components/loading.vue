<template>
  <div class="loading">
    <div class="loading__text">
      <div class="loading__text-tip">亲，先来看看烟火和樱花吧</div>
      <div class="loading__text-load">
        你的小可爱正在玩命加载图片，请耐心等待...
      </div>
      <div class="loading__text-finish">加载完成会自动为您呈现哦</div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    ;['#sakuraCanvas', '#fireworksCanvas'].forEach(v =>
      this.$isCanvas(v, 'block'),
    )
  },
  beforeDestroy() {
    ;['#sakuraCanvas', '#fireworksCanvas'].forEach(v =>
      this.$isCanvas(v, 'none'),
    )
  },
}
</script>

<style lang="less" scoped>
.loading {
  font-size: 30px;
  width: 100vw;
  height: 100vh;
  padding: 30px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__text {
    margin-top: -100px;
    text-align: center;
    background-image: linear-gradient(
      to right,
      rgb(238, 9, 121),
      rgb(255, 106, 0)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &-load {
      margin: 30px 0;
    }
  }
}
</style>
