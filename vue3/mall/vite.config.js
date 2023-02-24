import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//运行环境 node 的内置路径模块
import {resolve} from 'path'  
console.log('vite 配置文件，工程化套件在服务端运行')
console.log(__dirname,resolve(__dirname,'src')) // node的超级变量__dirname 项目根目录的物理路径

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    // 短路径 别名  快捷方式 
    alias:{
      '@':resolve(__dirname,'src'), // @ -> src目录所在的物理绝对位置
      '~':resolve(__dirname,'src/components')
    }
  }
})
