<script setup>
import {doLogin} from '../service/user'
import {useRoute,useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()


const login = async () => {
  const user = {
    name:'admin',
    password:'123456'
  }
  const data = await doLogin(user)
  if(data.code !== 0){
    console.log(data.msg)
  }else{// 成功登录
    if(data.token){
      localStorage.setItem('token',data.token)
    }
    // 跳转页面
    const redirect_url = route.query.redirect_url || '/'
    // console.log(redirect_url)
    router.push(redirect_url)
  }
}
</script>

<template>
  <router-link to="/second">second</router-link>
  <button @click="login()">
    登录
  </button>
</template>

<style lang="stylus" scoped>

</style>
