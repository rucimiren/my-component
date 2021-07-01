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
          v-for="v in dateList"
          :key="v"
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
              dayjs(v).format('YYYY-MM-DD') ===
                dayjs(new Date()).format('YYYY-MM-DD') &&
              dayjs(v).format('YYYY-MM-DD') !==
                dayjs(date).format('YYYY-MM-DD') &&
              dayjs(v).format('M') === dayjs(date).format('M'),
            'text-gray-5': dayjs(v).format('M') !== dayjs(date).format('M'),
            'hover:bg-blue-11 hover:text-white':
              dayjs(v).format('M') === dayjs(date).format('M'),
            'bg-blue-11 text-white':
              dayjs(v).format('YYYY-MM-DD') ===
              dayjs(date).format('YYYY-MM-DD'),
          }"
          @click="selectDate(v)"
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
  props: {
    value: {
      type: [String, Number, Date],
      default: () => new Date().getTime() + 24 * 60 * 60 * 1000,
    },
  },
  data() {
    return {
      dayjs,
      valueDate: '',
      date: new Date(),
      year: '',
      month: '',
      day: '',
      dateList: [],
      weekList: ['日', '一', '二', '三', '四', '五', '六'],
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
    value: {
      handler(val) {
        if (!new Date(val).getTime()) return
        this.date = dayjs(val).format('YYYY-MM-DD')
      },
      immediate: true,
    },
    valueDate: {
      handler() {},
      immediate: true,
    },
    date: {
      handler(val) {
        if (!new Date(val).getTime()) return
        this.valueDate = dayjs(val).format('YYYY-MM-DD')
        this.year = dayjs(val).format('YYYY')
        this.month = dayjs(val).format('M')
        this.dateList = []
        this.getDate(val)
      },
      immediate: true,
    },
  },
  methods: {
    init() {},
    getDate(val) {
      const date = new Date(val)

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
    selectDate(v) {
      dayjs(v).format('M') === dayjs(this.date).format('M') && (this.date = v)
    },
    setMonth(v) {
      this.date = new Date(this.date).setMonth(
        new Date(this.date).getMonth() + v,
      )
    },
    blur() {
      if (!this.valueDate) {
        return
      }
      this.valueDate = dayjs(this.date).format('YYYY-MM-DD')
    },
  },
}
</script>

<style lang="scss" scoped></style>
