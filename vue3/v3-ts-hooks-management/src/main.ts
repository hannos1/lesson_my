import { createApp } from 'vue';
import { createPinia } from 'pinia';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';// 减小生成的文件大小 提高自由度
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';
import './assets/css/icon.css';
import { usePermissStore } from './store/permiss';

const app = createApp(App);
app.use(createPinia());
app.use(router);

// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // 挂载在全局
    app.component(key, component);
}

const permiss = usePermissStore()
// 自定义指令 v-permiss
app.directive('permiss',{
    mounted(el,binding){
        if(!permiss.key.includes(String(binding.value))){
            el['hidden'] = true
        }
    }
})

app.mount('#app');
