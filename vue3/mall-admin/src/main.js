import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'  //根节点
import router from '@/router'  // 路由的配置模块化
import {
    ElContainer,
    ElAside,
    ElMenu,
    ElMenuItem,
    ElSubMenu,
    ElMenuItemGroup
} from 'element-plus'
import 'element-plus/dist/index.css'
// - 组件库  按需加载  路由接管项目
// - 启用路由
// - CSS reset ...
// - 全局要做的，在这做

const app = createApp(App)
app
    .use(router)
    .use(ElContainer)
    .use(ElAside)
    .use(ElMenu)
    .use(ElMenuItem)
    .use(ElSubMenu)
    .use(ElMenuItemGroup)

app.mount('#app')
