<template>
<div>
    About 页面
    <div @click="add">{{ count }}</div>
</div>
</template>

<script setup>
// vuex 数据可以超越组件进行共享
import { computed } from 'vue';
import { useStore }  from 'vuex';
let store = useStore();
let count = computed(() => store.state.count)
function add(){
    store.commit('add')
}
</script>

<style>

</style>