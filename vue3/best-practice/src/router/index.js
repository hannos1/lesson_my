import Home from '../pages/Home.vue' // 页面级别组件
// import About from '../pages/About.vue'
// import Other from '../pages/Other.vue'
// 路由的懒加载 引入时所有页面都会被加载，拖慢页面的首屏时间

import {
    createWebHashHistory,  // 前端路由 hash      history api  createWebHistory
    createRouter  // spa  路由实例
} from 'vue-router'

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        // component:About
        component: () => import('../pages/About.vue')
    },
    {
        path:'/other',
        name:'Other',
        // component:Other
        component: () => import('../pages/Other.vue')
    }
]

const router = createRouter({
    // 配置前端路由
    history:createWebHashHistory(),
    routes
})

export default router