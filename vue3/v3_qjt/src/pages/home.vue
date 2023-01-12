<template>
  <div>
    home
    <div @click="add">
        {{ count }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
// 数据在store中
import { useStore } from 'vuex'
let store = useStore() // 拿到仓库对象
// console.log(store)
let count = computed(() => store.state.count)
function add(){
  store.commit('add')
}

</script>

<style>

</style>