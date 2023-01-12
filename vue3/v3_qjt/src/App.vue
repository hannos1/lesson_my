<template>
  <div>
    <!-- router-link  取代a  preventDefault... vue-router封装 -->
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/posts">Post</router-link>
    <router-view>
      
    </router-view>
  </div>
</template>

<script setup>

</script>

<style>

</style>