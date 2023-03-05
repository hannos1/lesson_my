import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
import Home from '@/views/Home.vue'
// ts 类型检测
const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'Home',
        component:Home,
        redirect:'/recommend',
        children:[
            {
                path:'/recommend',
                name:'recommend',
                component:() => import('@/views/recommend/Index.vue'),
                meta:{
                    isCover:true
                },
            }
        ]
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router