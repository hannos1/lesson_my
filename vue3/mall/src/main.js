import { createApp } from 'vue'
// import './style.css'
import {
    Swipe,
    SwipeItem,
    Skeleton,
    Lazyload
} from 'vant'
import 'vant/lib/index.css'  //有赞样式库
import App from './App.vue'
import 'lib-flexible/flexible' 
import './assets/main.css'
import router from './router' 
// 启用全家桶 router  npm i vue-router@next
// 按需加载vant 组件  npm i vant
// rem fontSize 自适应  lib-flexible/flexible

const app = createApp(App)

app
    .use(Swipe)  // 
    // .use()
    .use(router) // SPA
    .use(SwipeItem)
    .use(Skeleton)
    .use(Lazyload)

// 过滤器
app
    .config
    .globalProperties
    .$filters = {
        prefix(url){
            if (url && url.startsWith('http')) {
                return url
            } else {
            url = `http://backend-api-01.newbee.ltd${url}`
                return url
            }
        }
    }

app
    .mount('#app')
