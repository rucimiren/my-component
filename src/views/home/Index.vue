<template>
  <div class="home">
    <div class="home__cantainer">
      <div
        v-for="v in pageList"
        :key="v.path"
        class="home__item"
        @click="$router.push(`/animate?animate=${v.component}`)"
      >
        {{ v.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',

  data() {
    return {
      pageList: [
        {
          component: 'animate01',
          text: '3D方块',
        },
        {
          component: 'animate02',
          text: '3D滚动',
        },
        {
          component: 'animate03',
          text: '缩略图',
        },
        {
          component: 'animate04',
          text: '卡片效果',
        },
        {
          component: 'animate05',
          text: '渐变效果',
        },
        {
          component: 'animate06',
          text: '视差效果',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100vh;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__cantainer {
    padding: 10px 30px;
    background: rgba(44, 104, 255, 0.5);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__item {
    cursor: pointer;
    background-image: -webkit-linear-gradient(bottom, red, #ff5f60, #f0c41b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
