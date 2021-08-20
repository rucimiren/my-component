<template>
  <div class="demo-sidebar">
    <!-- #region vue -->
    <xiao-scrollbar noresize wrap-style="height: 500px;">
      <div class="demo-sidebar__content">
        <div>三字经</div>
        <div>作者：王应麟</div>
        <div>{{ article }}</div>
      </div>
    </xiao-scrollbar>
    <!-- #endregion vue -->
  </div>
</template>

<script>
import { article } from './article'
export default {
  name: 'Index',

  data() {
    return {
      article,
    }
  },
}
</script>
<style lang="less" scoped>
.demo-sidebar {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);

  &__content {
    padding: 0 15px 15px;
    font-size: 14px;

    & > div:nth-child(1) {
      text-align: center;
      font-size: 24px;
      font-weight: 600;
    }

    & > div:nth-child(2) {
      text-align: center;
      margin-bottom: 10px;
      color: #8c8c8c;
    }
  }
}
</style>
