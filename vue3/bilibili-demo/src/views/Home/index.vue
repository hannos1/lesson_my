<template>
    <div>
        <!-- 首页一屏半 -->
        <!-- 头部组件 -->
        <AppHeader />
        <!-- 频道组件 -->
        <HomeChannel />
        <!-- 轮播图 -->
        <HomeSwiper />
        <!-- 视频组件 容器组件 -->
        <HomeVideolList />
    </div>
</template>

<script setup>
import {onMounted} from 'vue'
import {getSwiperList,getVideosList} from '@/service/home.js'
import AppHeader from '@/components/AppHeader.vue'
import HomeChannel from '@/components/HomeChannel.vue'
import HomeSwiper from '@/components/HomeSwiper.vue'
import HomeVideolList from '@/components/HomeVideolList.vue'
// import axios from 'axios'


onMounted(async () => {
    const swiperData = await getSwiperList()
    const videosData = await getVideosList()
    console.log(swiperData,videosData)
})
</script>

<style>

</style>