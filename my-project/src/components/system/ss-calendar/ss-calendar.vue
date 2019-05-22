<template>
  <div class="calendar__wrap">
    <div class="header">
      <!-- <div class="current-date">{{currentDate}}</div> -->
      <div class="current-date">五月上工情况</div>
    </div>
    <div class="body">
      <div class="weeks">
        <div class="week__item" v-for="week in weeks" :key="week">{{week}}</div>
      </div>
      <div class="day__list">
        <div class="day__item" v-for="(item,index) in dateData" :key="index">
          <!-- <span class="checked" v-if="item==='checked'">√</span> -->
          <span :class="{current:item===10}">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      checks: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      const {
        year,
        month,
        day
      } = this.getDate()
      const dateData = this.getDateData(year, month)
      return {
        year,
        month,
        day,
        dateData,
        weeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    },
    computed: {
      currentDate() {
        return `${this.year}-${this.format(this.month)}`
      }
    },
    watch: {
      checks(val) {
        const {
          year,
          month
        } = this.getDate()
        const dateData = this.getDateData(year, month)
        this.dateData = dateData
      }
    },
    methods: {
      getDate(current) {
        const date = current ? new Date(current) : new Date()
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return {
          year,
          month,
          day
        }        
      },
      getDateData(year, month) {
        const date = new Date(`${year}/${month}/1`)
        const firstDayWeek = date.getDay()
        const emptyStrNum = firstDayWeek > 0 ? firstDayWeek : 7
        const data = [...this.getEmptys(emptyStrNum), ...this.getDays()]
        return data
      },
      getEmptys(count) {
        let arr = []
        for (let i = 0; i < count; i++) {
          arr.push('')
        }
        return arr
      },
      getLastDay() {
        let {
          year,
          month
        } = this.getDate()
        month += 1
        if (month > 11) {
          year += 1
          month = 1
        }
        let firstDayTimeStamp = new Date(`${year}/${month}/1`).getTime()
        let oneDayTimeStamp = 24 * 60 * 60 * 1000
        let lastDay = new Date(firstDayTimeStamp - oneDayTimeStamp).getDate()
        return lastDay

      },
      getDays() {
        const lastDay = this.getLastDay()
        const days = []
        for (let i = 1; i <= lastDay; i++) {
          days.push(this.checks.includes(i) ? 'checked' : i)
        }
        return days
      },
      format(num) {
        return num < 10 ? `0${num}` : num
      }
    }
  }
</script>

<style lang="less" scoped>
  .calendar__wrap {
    background-color: #fff;
    color: #555555;
    width: 3rem;
    margin-left: .5rem;
    .header {
      padding: 0 .12rem;
      .current-date {
        text-align: center;
        font-size: .2rem;
        padding: .2rem 0;
      }
    }
    .body {
      .weeks {
        display: flex;
        font-size: .15rem;
        padding: .0rem 0;
        .week__item {
          flex: 1;
          text-align: center;
        }
      }
      .day__list {
        display: flex;
        flex-wrap: wrap;
        .day__item {
          display: flex;
          justify-content: center;
          width: 13.285%;
          text-align: center;
          padding: .05rem 0;
          font-size: .2rem;
          .checked,
          .current {
            display: flex;
            align-items: center;
            justify-content: center;
            width: .28rem;
            height: .28rem;
            border-radius: 100%;
            padding: .06rem;
            box-sizing: border-box;
            background-color: #3f9dff;
            color: #fff;
            font-size: .14rem;
          }
        }
      }
    }
  }
</style>
