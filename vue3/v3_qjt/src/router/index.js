// 路由的配置页面
import { 
    createRouter, //创建路由
    createWebHistory, // history  兼容性不是很好
    createWebHashHistory  //路由的形式  hash  兼容性好
} from 'vue-router'

import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Post from '../pages/posts.vue'


const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/posts',
        name:'posts',
        component:Post
    }
]

const router = createRouter({
    history:createWebHistory(),  // 路由的形式
    routes  // 配置数组
})

export default router