<template>
<div class="container mb-5">
    <nav-bar></nav-bar>
    <div style="max-width:90%;width:500px;margin:auto;">
      <b v-if="state.loading">Loading</b>
      <post :detail="post" v-for="post in state.posts"  :key="post.id"></post>
    </div>
</div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Post from './components/Post.vue'
import {reactive,ref,onMounted} from 'vue'   // composition api
// ref 简单数据类型  reactive  复杂数据类型 
import API from './api/index'  // 模块化的好处  分离代码 代码的管理和复用


//状态
const state = reactive({
    loading:true,
    posts:[]
})

onMounted(() => {
    console.log('挂载了...')
    API
     .getTopStories()
     .then((res) =>{
        // console.log(res)
        let {data} = res;
        data = data.splice(0,30)
        // console.log(data)
        data.forEach(id => {
            API
             .fetchItem(id)
             .then(res => {
                // console.log(res)
                state.loading = !state.loading
                state.posts.push(res.data)
             })
        })
        
     })
})

</script>

<style>

</style>