<template>
  <div class="shadow-2xl" style="width: 500px">
    <xiao-scrollbar noresize wrap-style="height: 500px;">
      <div v-for="v in 100" :key="v">{{ v }}</div>
    </xiao-scrollbar>
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
