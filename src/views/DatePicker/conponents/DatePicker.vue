<template>
  <div class="w-full relative">
    <input
      v-model="date"
      type="text"
      class="border-gray-5 border border-solid pl-4 py-4 w-full"
    />
    <div class="shadow-md mt-10">
      <div class="flex">
        <div
          v-for="v in weekList"
          :key="v"
          class="w-1/7 flex justify-center items-center"
        >
          {{ v }}
        </div>
      </div>
      <div class="flex flex-wrap">
        <div
          v-for="v in dateList"
          :key="v"
          class="w-1/7 flex justify-center items-center"
          :class="{
            'text-gray-7': dayjs(v).format('M') !== dayjs(date).format('M'),
            'bg-blue-11 text-white':
              dayjs(v).format('DD') === dayjs(new Date()).format('DD'),
          }"
        >
          {{ v | formatDay }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'Datepicker',

  data() {
    return {
      date: '',
      year: '',
      month: '',
      day: '',
      dateList: [],
      weekList: ['日', '一', '二', '三', '四', '五', '六'],
      dayjs,
    }
  },
  created() {
    this.init()
  },
  computed: {
    currentDay() {
      return ''
    },
  },
  filters: {
    formatDay(val) {
      return dayjs(val).format('D')
    },
  },
  watch: {
    date(val) {
      this.dateList = []
      this.getDate(val)
    },
  },
  methods: {
    init() {
      this.date = dayjs(new Date()).format('YYYY-MM-DD')
    },
    getDate(val) {
      const date = new Date(val)
      console.log(dayjs(date).$M)

      for (let i = 0; i < 42; i++) {
        this.dateList.push(
          new Date(`${dayjs(date).format('YYYY-MM')}-1`).getTime() -
            dayjs(`${dayjs(date).format('YYYY-MM')}-1`).$W *
              24 *
              60 *
              60 *
              1000 +
            i * 24 * 60 * 60 * 1000,
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
