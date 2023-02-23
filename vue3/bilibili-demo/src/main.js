import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import '@/mock/index'  // mock 模拟

createApp(App)
    .use(router)
    .mount('#app')
