// 暴露路由对象
// 路由类型配置
// 数组配置
// 路由的懒加载

import { createRouter,createWebHashHistory } from "vue-router";
import Home from '@/views/Home.vue'



const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',  // 根路径
            redirect:'/home',  // 跳转

        },
        {
            path:'/home',
            name:'home',
            component:Home
        },
        {
            path:'/category',
            name:'category',
            component:() => import('@/views/Category.vue')
        },{
            path:'/login',
            name:'login',
            component:() => import('@/views/Login.vue')
        },{
            path:'/cart',
            name:'cart',
            component:() => import('@/views/Cart.vue')
        },{
            path:'/user',
            name:'user',
            component:() => import('@/views/User.vue')
        }
    ]
})

export default router