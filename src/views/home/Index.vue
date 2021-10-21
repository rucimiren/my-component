<template>
  <div class="home">
    <router-link to="/animate01">看我</router-link>
    <router-link to="/animate02">看看我</router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
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
}
</style>
