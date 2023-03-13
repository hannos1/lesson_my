import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
const routes = [
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/second',
        name:'second',
        component:() => import('../views/Second.vue'),
        meta:{
            login:true
        }
    },
    {
        path:'/login',
        name:'login',
        component:() => import('../views/Login.vue')
    }
]


const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router 