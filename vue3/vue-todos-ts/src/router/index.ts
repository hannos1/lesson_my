import {createRouter, createWebHistory,RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component:HomeView
        },
        {
            path:'/index',
            name:'index',
            component:() => import('../views/HomeView.vue')
        }
    ] as RouteRecordRaw[]  // 每个路由的配置满足RouteRecordRaw类型约束
})



export default router;