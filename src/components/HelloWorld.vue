<template>
  <div class="music-heard">
    <div class="music-heard-top">
      <div>{{ generateTitle(contentData[0].value) }}</div>
      <ul class="top-detail">
        <li v-for="(item, index) in contentData" :key="index">
          {{ generateTitle(item.value) }}
        </li>
        <li>
          <el-radio-group v-model="radio" @change="radioChange">
            <el-radio :label="'zh'">简体中文</el-radio>
            <el-radio :label="'en'">English</el-radio>
          </el-radio-group>
        </li>
      </ul>
    </div>
    <div class="music-heard-bottom"></div>
    <div>
      <el-table :data="resultData" style="width: 100%">
        <el-table-column
          prop="date"
          :label="$t('i18nView.tableDate')"
          width="280"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          :label="$t('i18nView.tableName')"
          width="280"
        >
        </el-table-column>
        <el-table-column prop="address" :label="$t('i18nView.tableAddress')">
        </el-table-column>
      </el-table>
    </div>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
  </div>
</template>

<script>
/** eslint disable */
import { generateTitle } from '@/utils/i18n'
import Cookies from 'js-cookie'
import tablelocale from './table'
const viewName = 'i18nView'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      value1: '',
      radio: 'zh',
      resultData: [],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      contentData: [
        {
          value: 'music'
        },
        {
          value: 'findMusic'
        },
        {
          value: 'myMusic'
        },
        {
          value: 'friend'
        },
        {
          value: 'musician'
        }
      ],
      tableData1: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]
    }
  },
  methods: {
    generateTitle,
    radioChange (data) {
      // console.log('this.$i18n', this.$i18n, this.radio, 'data', data)
      Cookies.set('language', data)
      this.$i18n.locale = data
      this.$message.success('系统语言切换成功！')
    },
    setcookie () {
      Cookies.set('language', 'zh')
      this.resultData = this.tableData
    }
  },
  created () {
    this.setcookie()
    if (!this.$i18n.getLocaleMessage('en')[viewName]) {
      this.$i18n.mergeLocaleMessage('en', tablelocale.en)
      this.$i18n.mergeLocaleMessage('zh', tablelocale.zh)
    }
  },
  watch: {
    radio (newval) {
      console.log(newval)
      if (newval === 'zh') {
        this.resultData = this.tableData
      } else {
        this.resultData = this.tableData1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "./base.css";
.compatible(@params, @value) {
  -webkit-@{params}: @value;
  -moz-@{params}: @value;
  -ms-@{params}: @value;
  -o-@{params}: @value;
  @{params}: @value;
}
.styleDisplay() {
  display: box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}
.music-heard {
  .music-heard-top {
    color: aliceblue;
    width: 100%;
    height: 70px;
    background-color: #242424;
    .styleDisplay();
    .compatible(align-items, center);
    > div {
      width: 20%;
      font-size: 2vw;
    }
  }
  .music-heard-top .top-detail {
    height: 100%;
    .styleDisplay();
    .compatible(align-items, center);
    .compatible(justify-content, space-around);
    width: 60%;
  }
  .music-heard-bottom {
    width: 100%;
    height: 35px;
    background-color: #c20c0c;
  }
}
</style>
