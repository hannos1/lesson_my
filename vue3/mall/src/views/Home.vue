<template>
    <div id="home-wrapper">
        <header class="home-header wrap">
            <router-link to="/category">
                <i class="nbicon nbmenu2"></i>
            </router-link>
            <div class="header-search">
                <span class="app-name">新蜂商城</span>
                <i class="nbicon nbSearch"></i>
                <router-link class="search-title" to="/product-list?from=home">山河无恙，人间皆安</router-link>
            </div>
            <router-link class="login" to="/login">登录</router-link>
        </header>
        <!-- <SubHeader /> -->
    </div>
</template>

<script setup>
// import SubHeader from '../components/SubHeader.vue'
import { onMounted,reactive } from 'vue'
import { getHomeData } from '../service/home'
// 挂载后再发送api请求 提升性能  不会去争抢挂载显示
const state = reactive({
    swiperList:[]
})
onMounted(async () => {
    const {data} = await getHomeData() // await promise
    console.log(data)
    state.swiperList = data.data.carousels
    console.log(state.swiperList)
})
</script>

<style lang="stylus" scoped>
@import "../common/style/mixin";
// wh 可以一次性设置width height  的mixin混合
.home-header
    position absolute
    top 0
    left 0    
    line-height 1.33333rem
    padding 0 .4rem
    font-size 0.4rem
    color #fff
    z-index 10000
    wh(100%, 1.33333rem)
    fj()
    .nbmenu2
        color $primary
    .header-search 
        display flex
        width 74%
        box-sizing content-box
        height 0.53333rem
        line-height 0.53333rem
        margin 0.26667rem 0
        padding 0.1333rem 0
        color #232326
        border-radius .53333rem
        background rgba(255, 255, 255, .7)
        .app-name
            padding 0 0.26667rem
            color $primary
            font-size 0.53333rem
            font-weight blod
            border-right .026667rem solid #666
        .icon-search
            padding 0 .26667rem
            font-size .45333rem
        .search-title
            font-size .32rem
            color #666
            line-height 0.56rem
    .login
        color $primary
        line-height 1.38667rem

</style>
