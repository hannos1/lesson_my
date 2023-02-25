<template>
     <div class="category">
        <div>
            <header class="category-header wrap">
                <i class="nbicon nbfanhui"></i>
                <div class="header-search">
                    <i class="nbicon nbSearch"></i>
                    <router-link class="search-title" to="product-list?from=category">
                    全场50元起步
                    </router-link>
                </div>
                <i class="nbicon nbmore"></i>
            </header>
        </div>
        <nav-bar/>
    </div>
</template>

<script setup>
import { reactive,onMounted } from 'vue'
import { showLoadingToast,closeToast } from 'vant'
import NavBar from '~/NavBar.vue'
import {useRouter} from 'vue-router'

const state = reactive({
    loading:true
})
const router = useRouter()

onMounted(() => {
    showLoadingToast({
        message:'加载中...',
        forbidClick:true
    })

    closeToast()
})
</script>

<style lang="stylus" scoped>
@import "../common/style/mixin";
.category
    .category-header
        background #fff
        position fixed
        left 0
        top 0
        fj()
        wh(100%, 1.33333rem);
        line-height 1.33333rem
        padding 0 0.4rem
        font-size: .4rem;
        color: #656771;
        z-index: 10000;
        .header-search
            display: flex;
            width: 80%;
            height: .53333rem;
            line-height: .53333rem;
            box-sizing: content-box;
            margin: .26667rem 0;
            padding: .13333rem 0;
            color: #232326;
            background: #F7F7F7;
            border-radius: .53333rem;
            .nbSearch
                padding: 0 .26667rem 0 .53333rem;
                font-size: .45333rem;
            .search-title
                font-size: .32rem;
                color: #666;
                line-height: .56rem;
        .nbmore
            font-size .53333rem
</style>