import { createApp } from 'vue'
// import './style.css'
import './assets/css/reset.css'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'

// 链式调用
createApp(App)
    .use(Element3)
    .use(router)    // npm i vue-router@next
    .mount('#app')  //启用Element3
