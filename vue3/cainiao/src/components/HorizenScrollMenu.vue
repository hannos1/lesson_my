<template>
    <div class="container">
        <div class="scroll-wrapper" ref="scroll">
            <div class="scroll-content" ref="content">
                <div class="scroll-item" v-for="num in nums" :key="num">
                    {{ nums - num + 1 }}
                </div>
            </div>
            <div class="pointer-wrapper">
                <div class="inner" :style="{left:innerLeft}"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import _ from 'lodash'
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { ref,onMounted } from 'vue'

BScroll.use(ObserveDOM)  // 添加新的拓展属性  动态dom

const nums = ref(50)
const innerLeft = ref('0px')
const scroll = ref(null)
const content = ref(null)
let wrapperWidth = 0
let contentWidth = 0
let bs = null // betterscroll的初始值
onMounted(() => {
    console.log(scroll.value)
    wrapperWidth = scroll.value.offsetWidth
    contentWidth = content.value.offsetWidth
    // console.log(wrapperWidth,contentWidth)

    bs = new BScroll(scroll.value,{
        probeType:3,  // 监听的参数
        scrollX:true,
        scrollY:false,
        observeDOM:true
    })
    const onScroll = position => {
        console.log(position,'////')
        let percent = Math.abs(position.x) / (contentWidth - wrapperWidth)
        // console.log(percent)
        let moveLeft = percent * 30
        innerLeft.value = `${moveLeft}px`
    }
    bs.on('scroll',_.throttle(onScroll))
    // setTimeout(() => {
    //     nums.value = 100
    // },2000)
})

</script>

<style lang="stylus" scoped>
.container
    text-align center
    .scroll-wrapper
        width 90%
        margin 80px auto
        white-space nowrap
        border 3px solid #42b983
        border-radius 5px
        overflow hidden
        position relative
        .scroll-content
            display inline-block
            .scroll-item
                display inline-block
                padding 0 20px
                height 50px
                line-height 50px
                font-size 24px
                text-align center
                &:nth-child(2n)
                    background-color #c3d899
                &:nth-child(2n+1)
                    background-color #f2d4a7
        .pointer-wrapper
            position absolute
            bottom 2px 
            width 40px
            height 2px
            background-color grey
            left 50%
            margin-left -20px
            .inner
                position absolute
                background-color white
                width 10px 
                height 100%




</style>