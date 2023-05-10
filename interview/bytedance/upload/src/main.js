import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import {
    ElButton
} from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app
    .use(ElButton)
app.mount('#app')
