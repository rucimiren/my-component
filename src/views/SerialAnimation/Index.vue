<template>
  <div style="width: 300px">
    <serial-animation
      :aspectRatio="750 / 520"
      :count="100"
      :diffTime="60"
      :forStart="60"
      format="jpg"
      publicPath="//storage.jd.com/activity-public-static/demo/newloan_"
    />
  </div>
</template>

<script>
export default {
  name: 'ComponentsIndex',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="less" scoped></style>
