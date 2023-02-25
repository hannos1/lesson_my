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
            meta:{
                index:1
            },
            component:Home
        },
        {
            path:'/category',
            name:'category',
            meta:{
                index:1
            },
            component:() => import('@/views/Category.vue')
        },{
            path:'/login',
            name:'login',
            meta:{
                index:3
            },
            component:() => import('@/views/Login.vue')
        },{
            path:'/cart',
            name:'cart',
            meta:{
                index:1
            },
            component:() => import('@/views/Cart.vue')
        },{
            path:'/user',
            name:'user',
            meta:{
                index:1
            },
            component:() => import('@/views/User.vue')
        },
        {
            // 动态路由  url  params    ?id= queryString   #  hash
            path:'/detail/:id',
            name:'detail',
            meta:{
                index:3
            },
            component:() => import('@/views/Detail.vue')
        }
    ]
})

export default router