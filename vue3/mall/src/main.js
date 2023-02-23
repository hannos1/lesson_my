import { createApp } from 'vue'
// import './style.css'
import {
    Swipe
} from 'vant'
import 'vant/lib/index.css'
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
app
    .mount('#app')