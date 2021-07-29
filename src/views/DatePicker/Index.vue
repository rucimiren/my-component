<template>
  <div style="width: 224px">
    <date-picker v-model="date" format="YYYY/MM/DD" />
    <div
      class="
        mt-20
        cursor-pointer
        rounded-4
        w-200
        h-50
        bg-primary
        text-white
        flex
        justify-center
        items-center
        text-20
      "
      @click="handler"
    >
      getDate
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      date: '',
    }
  },

  mounted() {},

  methods: {
    handler() {
      console.log(this.date)
    },
  },
}
</script>

<style lang="less" scoped></style>
