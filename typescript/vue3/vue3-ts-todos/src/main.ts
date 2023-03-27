import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

enum PostStatus{ // 枚举类型
    Unpublished,
    Published,
    Draft
}

interface Post{ // 接口
    title:string;
    content?:string;  //可选项
    status:PostStatus;  // 0 draft  1 发布  2 首页  -1  删除
}
let post:Post = {
    title:'one day',
    content:'字节面试',
    status:PostStatus.Unpublished
}

createApp(App)
    .mount('#app')
