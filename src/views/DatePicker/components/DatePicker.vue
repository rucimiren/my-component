<template>
  <div ref="datePicker" class="w-full relative">
    <input
      v-model="valueDate"
      type="text"
      class="
        border-gray-5 border border-solid
        pl-4
        py-4
        w-full
        relative
        z-10
        rounded-2
      "
      @blur="blur"
      @focus="focus"
    />
    <div
      v-show="isShowDate"
      class="shadow-md select-none absolute w-full bg-white"
      :class="isShowDate ? 'dateIn' : 'dateOut'"
    >
      <!-- 头部切换展示部分 -->
      <div
        class="
          flex
          justify-around
          border-b border-solid border-gray-3
          py-4
          mb-4
        "
      >
        <span class="cursor-pointer" @click="setYear(-1)"> &lt;&lt; </span>
        <span class="cursor-pointer" @click="setMonth(-1)"> &lt; </span>
        <span class="cursor-pointer">{{ year }}年{{ month }}月</span>
        <span class="cursor-pointer" @click="setMonth(1)"> &gt; </span>
        <span class="cursor-pointer" @click="setYear(1)"> &gt;&gt;</span>
      </div>
      <!-- 星期部分 -->
      <div class="flex">
        <div
          v-for="v in weekList"
          :key="v"
          class="w-1/7 flex justify-center items-center"
        >
          {{ v }}
        </div>
      </div>
      <!-- 日期部分 -->
      <div class="flex flex-wrap">
        <div
          v-for="(v, i) in dateList"
          :key="v.date"
          class="w-1/7 flex justify-center items-center p-2"
        >
          <div
            class="
              flex
              w-full
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
            {{ v.date | formatDate('D') }}
          </div>
        </div>
      </div>
      <!-- 底部工具部分 -->
      <div
        class="
          flex
          justify-around
          border-gray-3 border-t border-solid
          mt-4
          py-4
        "
      >
        <span
          class="cursor-pointer"
          @click="
            () => {
              setDate(new Date().getTime() - 24 * 60 * 60 * 1000)
              isShowDate = false
            }
          "
          >昨天</span
        >
        <span
          class="cursor-pointer"
          @click="
            () => {
              setDate(new Date())
              isShowDate = false
            }
          "
          >今天</span
        >
        <span
          class="cursor-pointer"
          @click="
            () => {
              setDate(new Date().getTime() + 24 * 60 * 60 * 1000)
              isShowDate = false
            }
          "
          >明天</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { formatDate } from '@/utils'
export default {
  name: 'date-picker',
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
      valueDateCopy: '',
      isShowDate: false,
      initDate: new Date(),
      dateList: [],
      weekList: ['日', '一', '二', '三', '四', '五', '六'],
    }
  },
  created() {
    this.init()
  },
  mounted() {
    window.addEventListener('click', e => {
      const isContains = this.$refs.datePicker?.contains(e.target)
      !isContains && (this.isShowDate = false)
    })
  },
  computed: {
    today() {
      return ''
    },
    year() {
      return formatDate(this.initDate, 'YYYY')
    },
    month() {
      return formatDate(this.initDate, 'M')
    },
  },
  watch: {
    value: {
      handler(val) {
        if (!new Date(val).getTime()) return
        this.setDate(val)
      },
      immediate: true,
    },
    valueDate: {
      handler() {
        // console.log(dayjs(val).isValid(), isNaN(new Date(val).getTime()))
      },
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
            // new Date(`${formatDate(date, 'YYYY-MM')}-1`).getTime() -
            // new Date(`${formatDate(date, 'YYYY-MM')}-1`).getDay() *
            dayjs(date).startOf('month').valueOf() -
            dayjs(date).startOf('month').day() * 24 * 60 * 60 * 1000 +
            i * 24 * 60 * 60 * 1000,
          isSelectDate: false,
        }
        this.dateList.push(json)
      }
    },
    // 选中日期
    selectDate(v) {
      this.isShowDate = false
      this.isShowMonth(v.date) && this.setDate(v.date)
    },
    // 切换月份
    setMonth(v) {
      this.setDate(
        new Date(this.initDate).setMonth(Number(this.month) - 1 + v),
        'initDate',
      )
    },
    setYear(v) {
      this.setDate(
        new Date(this.initDate).setYear(Number(this.year) + v),
        'initDate',
      )
    },
    // 失去焦点
    blur() {
      if (!this.valueDate) {
        this.allFalse()
        return
      }
      this.valueDateCopy && this.setDate(this.valueDateCopy, 'valueDate')
    },
    focus() {
      this.isShowDate = true
    },
    // 取消选中
    allFalse() {
      this.dateList.forEach(v => (v.isSelectDate = false))
    },
    // 是否是展示的月份
    isShowMonth(date) {
      return formatDate(date, 'M') === formatDate(this.initDate, 'M')
    },
    // 两个日期对比，是否一样
    isDateDiff(date1, date2) {
      return formatDate(date1) === formatDate(date2)
    },
    // 赋值
    setDate(date, type) {
      switch (type) {
        case 'valueDate':
          this.valueDate = this.valueDateCopy = formatDate(date)
          break
        case 'initDate':
          this.initDate = formatDate(date)
          break
        default:
          this.valueDate = this.valueDateCopy = this.initDate = formatDate(date)
          break
      }
    },
  },
}
</script>

<style lang="less" scoped>
.dateIn {
  animation: in 0.2s linear forwards;
}
.dateOut {
  animation: out 0.2s linear forwards;
}
@keyframes in {
  0% {
    // transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    // transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes out {
  0% {
    // transform: translateY(0%);
    opacity: 1;
  }
  100% {
    // transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
