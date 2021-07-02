<template>
  <div class="w-full relative">
    <input
      v-model="valueDate"
      type="text"
      class="border-gray-5 border border-solid pl-4 py-4 w-full"
      @blur="blur"
    />
    <div class="shadow-md mt-10 select-none">
      <div class="flex justify-around border-b border-solid border-gray-5">
        <span class="cursor-pointer" @click="setMonth(-1)"> &lt; </span>
        <span class="cursor-pointer">{{ year }}年{{ month }}月</span>
        <span class="cursor-pointer" @click="setMonth(1)"> &gt; </span>
      </div>
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
          v-for="(v, i) in dateList"
          :key="v.date"
          class="
            w-1/7
            flex
            justify-center
            items-center
            cursor-pointer
            rounded-2
          "
          :class="{
            'text-blue-11':
              isDateDiff(v.date, new Date()) &&
              (!valueDate || !isDateDiff(v.date, initDate)) &&
              isShowMonth(v.date),
            'text-gray-5': !isShowMonth(v.date),
            'hover:bg-blue-11 hover:text-white': isShowMonth(v.date),
            'bg-blue-11 text-white': v.isSelectDate,
          }"
          @click="selectDate(v, i)"
        >
          {{ v.date | formatDay }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { formatDate } from '@/utils'
export default {
  name: 'Datepicker',
  props: {
    value: {
      type: [String, Number, Date],
      // default: () => new Date().getTime() + 24 * 60 * 60 * 1000,
    },
  },
  data() {
    return {
      dayjs,
      valueDate: '',
      initDate: new Date(),
      dateList: [],
      weekList: ['日', '一', '二', '三', '四', '五', '六'],
    }
  },
  created() {
    this.init()
  },
  computed: {
    today() {
      return ''
    },
    year() {
      return dayjs(this.initDate).format('YYYY')
    },
    month() {
      return dayjs(this.initDate).format('M')
    },
  },
  filters: {
    formatDay(val) {
      return dayjs(val).format('D')
    },
  },
  watch: {
    value: {
      handler(val) {
        if (!new Date(val).getTime()) return
        this.initDate = this.valueDate = formatDate(val)
      },
      immediate: true,
    },
    valueDate: {
      handler() {},
      immediate: true,
    },
    initDate: {
      handler(val) {
        if (!new Date(val).getTime()) return
        this.dateList = []
        this.getDate(val)
      },
      immediate: true,
    },
    dateList: {
      handler(val) {
        const date = val.find(
          v =>
            this.isDateDiff(v.date, this.valueDate) && this.isShowMonth(v.date),
        )
        date && (date.isSelectDate = true)
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    init() {},
    // 初始化日期
    getDate(val) {
      const date = new Date(val)
      for (let i = 0; i < 42; i++) {
        let json = {
          date:
            new Date(`${dayjs(date).format('YYYY-MM')}-1`).getTime() -
            dayjs(`${dayjs(date).format('YYYY-MM')}-1`).$W *
              24 *
              60 *
              60 *
              1000 +
            i * 24 * 60 * 60 * 1000,
          isSelectDate: false,
        }
        this.dateList.push(json)
      }
    },
    // 选中日期
    selectDate(v) {
      this.isShowMonth(v.date) &&
        (this.valueDate = this.initDate = formatDate(v.date))
    },
    // 切换月份
    setMonth(v) {
      this.initDate = new Date(this.initDate).setMonth(
        new Date(this.initDate).getMonth() + v,
      )
    },
    // 失去焦点
    blur() {
      if (!this.valueDate) {
        this.allFalse()
        return
      }
      this.valueDate = formatDate(this.initDate)
    },
    // 取消选中
    allFalse() {
      this.dateList.forEach(v => (v.isSelectDate = false))
    },
    // 是否是展示的月份
    isShowMonth(date) {
      return dayjs(date).format('M') === dayjs(this.initDate).format('M')
    },
    // 两个日期对比，是否一样
    isDateDiff(date1, date2) {
      return formatDate(date1) === formatDate(date2)
    },
  },
}
</script>

<style lang="scss" scoped></style>
