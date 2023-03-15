import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import {
    Swipe,
    SwipeItem,
} from 'vant'
import 'vant/lib/index.css'

createApp(App)
    .use(Swipe)
    .use(SwipeItem)
    .mount('#app')
