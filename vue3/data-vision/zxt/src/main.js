import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import {
    ElButton,
    ElCard
} from 'element-plus'

createApp(App).use(ElButton).use(ElCard).mount('#app') //声明ElButton为全局组件
