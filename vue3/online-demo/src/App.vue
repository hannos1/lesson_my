<script setup>
import { nextTick } from 'vue';
import {useRouter} from 'vue-router'
const router = useRouter()


router.beforeEach((to,from,next) => {
  console.log(from,to)
  if(to.meta.login){
    if(!localStorage.getItem('token')){
      console.log(localStorage.getItem('token'))
      next(`/login?redirect_url=${to.path}`)
      return 
    }else{
      next()
    }
  }else{
    next()
  }
})
</script>

<template>
<router-link to="/second">second</router-link>
<router-view></router-view>
</template>

<style lang="stylus" scoped>

</style>
