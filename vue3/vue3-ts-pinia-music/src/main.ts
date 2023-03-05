import { createApp } from 'vue'
// import './style.css'
import router from './router'
import App from './App.vue'
import {createPinia} from 'pinia'
import "./theme/red.styl"
import "./theme/black.styl"
import '@/assets/css/index.styl'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')