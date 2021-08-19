<template>
  <div class="base">
    <div class="base__sidebar">
      <router-link
        v-for="v in textList"
        :key="v.text"
        class="base__sidebar__items"
        exact-active-class="base__sidebar__items-active"
        :to="v.path"
        >{{ v.text }}</router-link
      >
    </div>
    <div class="base__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      textList: [
        { path: '/', text: '首页' },
        { path: '/DatePicker', text: 'DatePicker' },
        { path: '/SerialAnimation', text: 'SerialAnimation' },
        { path: '/Icon', text: 'Icon' },
        { path: '/Loading', text: 'Loading' },
        { path: '/Scrollbar', text: 'Scrollbar' },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.base {
  display: flex;

  &__sidebar {
    width: 200px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85);
    overflow: auto;

    &__items {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      border-bottom: 1px solid rgba(0, 0, 0, 0.45);

      &:hover,
      &-active {
        background-color: #2c68ff;
      }
    }
  }

  &__content {
    flex: 1;
    padding: 10px;
    height: 100vh;
    overflow: auto;
  }
}
</style>
