import Home from '../views/Home/index.vue'

import {
    createWebHashHistory,
    createRouter
} from 'vue-router'

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'Home',
        component:() => import('../views/Home/index.vue')
    },
    {
        path:'/login',
        name:'Login',
        component: () => import('../views/Login/index.vue')
    },
    {
        path:'/search',
        name:'Search',
        component: () => import('../views/Search/index.vue')
    },
    {
        path:'/video',
        name:'Video',
        component: () => import('../views/Video/index.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router