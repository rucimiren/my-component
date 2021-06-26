<template>
  <div class="w-full relative">
    <input
      v-model="date"
      type="text"
      class="border-primary border border-solid pl-4 py-4 w-full"
    />
    <div>
      <div class="date">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Datepicker',

  data() {
    return {
      date: '',
    }
  },

  mounted() {},

  methods: {
    getDate() {
      const date = new Date()
      console.log(date)
    },
  },
}
</script>

<style lang="scss" scoped></style>
