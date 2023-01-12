import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 入口文件里 启用vue-router
import router from './router/index.js'
import store from './store/index'
import Element3 from 'element3'  // 通用业务开发组件库
import 'element3/lib/theme-chalk/index.css' // css文件

createApp(App)
    .use(Element3)
    .use(router) // use 使用
    .use(store) // 启用 store
    .mount('#app')
