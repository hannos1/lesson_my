<script setup>
import {reactive} from 'vue'
import {useRouter} from 'vue-router'  // hooks
import { onMounted } from 'vue'


import { useCartStore } from '@/store/cart.js'
const cart = useCartStore();
console.log(cart.count);
const { updateCount } = cart;
onMounted(() => {
    updateCount()
})

const router = useRouter()
// 在路由跳转前触发
// 路由守卫
router.beforeEach((to,from,next) => {  // next是下一步去哪里
  // console.log(from,to,'..')
  if(to.meta.index > from.meta.index){
    // 上级页面去子页
    state.transitionName = 'slide-left'
  }else if(to.meta.index < from.meta.index){
    // 子页面回上级页面
    state.transitionName = 'slide-right'
  }else{
    state.transitionName = ''
  }
  // console.log(next)
  // next({path:'/home'})
  next() // 没有这个东西会白屏
})
const state = reactive({
  transitionName:'slide-left'
})
</script>

<template>
<!-- <transition>
  <router-view class="router-view"/>
</transition> -->

  <router-view class="router-view" v-slot="{Component}">
    <transition :name="state.transitionName">
      <component :is="Component" />  
    </transition>
  </router-view>
</template>

<style scoped>
.router-view{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  -webkit-overflow-scrolling: touch;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active{
  height: 100%;
  /* 提前告知浏览器，即将会有transform渐变 这里enter类是动态加载的所以可以提高性能 */
  will-change:transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}

.slide-right-enter-from {
  /* 默认都是 opacity 1  transform 0，0，0 */
  opacity:0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
};
.slide-left-enter-from {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active{
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
