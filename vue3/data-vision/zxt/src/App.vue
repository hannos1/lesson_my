<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import {onMounted, onUnmounted} from 'vue'
let myChart = null;
onMounted(() => {
  // console.log('已挂载')
  myChart = window.echarts.init(document.getElementById('zoom')) // 初始化图形
  const option = {
    title:{
      text:'系统折线图'
    },
    tooltip:{
      trigger:'axis',
      axisPointer:{
        type:'cross',
        label:{
          backgroundColor:'#6a7985'
        }
      }
    },
    legend:{
      data:['新增注册','付费用户','活跃用户','订单数','当日总收入']
    },
    grid:{
      left:'3%',
      right:'4%',
      bottom:'3%',
      containLabel:true
    },
    xAxis:[
      {
        type:'category',
        boundaryGap:false,
        data: ['2021-03-11', '2021-03-12', '2021-03-13', '2021-03-14', '2021-03-15',
          '2021-03-16', '2021-03-17'
        ]
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
        {
          name: '付费用户',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '活跃用户',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '订单数',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '当日总收入',
          type: 'line',
          stack: '总量',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
  }
  myChart.setOption(option)
})
onUnmounted(() => {
  myChart.dispose();
})
</script>

<template>
  <div>
    <!-- <el-button>按钮</el-button>
    <HelloWorld></HelloWorld> -->
    <el-card class="introduce">
      <div class="order">
        <el-card class="order-item">
        <template #header>
            <div class="card-header">
              <span>今日订单数</span>
            </div>
        </template>
        <div class="item">1888</div>
        </el-card>
        <el-card class="order-item">
          <template #header>
            <div class="card-header">
              <span>今日日活</span>
            </div>
          </template>
          <div class="item">36271</div>
        </el-card>
        <el-card class="order-item">
          <template #header>
            <div class="card-header">
              <span>转化率</span>
            </div>
          </template>
          <div class="item">20%</div>
        </el-card>
      </div>
    </el-card>
    <div id="zoom"></div>
  </div>
</template>

<style>
/* 修改组件库 */
#zoom{
  min-height: 300px;
}
.introduce .order{
  display: flex;
  margin-bottom: 50px;
}
.introduce .order .order-item {
  flex: 1;
  margin-right: 20px;
}
.introduce .order .order-item:last-child {
  /* flex: 1; */
  margin-right: 0px;
}
</style>
