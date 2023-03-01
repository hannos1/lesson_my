<script setup>
import {reactive,onMounted} from 'vue'
import {getGoods} from './service/goods'
import GoodsItem from './components/GoodsItem.vue'
const heights = [0,0]  // 两列的高度，动态修改
const state = reactive({
  allGoods:[],
  leftGoods:[],
  rightGoods:[]
})

const getMinHeight = () => {
  let minHeight = Math.min(...heights)
  return heights.indexOf(minHeight)
}

onMounted(async () => {
  const data = await getGoods();
  // console.log(data)
  state.allGoods = data
  let leftTempGoods = [],
    rightTempGoods = [];

  for(let i = 0;i < data.length; i++){
    let minHeightIndex = getMinHeight()
    if(minHeightIndex == 0){
      leftTempGoods.push(data[i])
    }else{
      rightTempGoods.push(data[i])
    }
    heights[minHeightIndex] += data[i].height
  }
  console.log(leftTempGoods,rightTempGoods)
  state.leftGoods = leftTempGoods;
  state.rightGoods = rightTempGoods;
})
</script>

<template>
<div class="page">
  <header></header>
  <main class="wrapper">
    <div class="col">
      <GoodsItem v-for="goods in state.leftGoods" :key="goods.id" :goods="goods" />
    </div>
    <div class="col">
      <GoodsItem v-for="goods in state.rightGoods" :key="goods.id" :goods="goods" />
    </div>
  </main>
  <footer></footer>
</div>


</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
header, footer {
  height: 2rem;
}
main {
  flex: 1;
  /* background: green; */
  padding: 0 .26666rem;
  display: flex;
  justify-content:space-between;
  overflow-y: scroll;
}
.col {
  /* height: 100%; */
  width: 48%;
  /* background-color: yellow; */
  /* overflow-y: scroll; */
}



</style>
