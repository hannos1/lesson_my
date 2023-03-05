# 五星网易云音乐

- 后端api
   - mockjs   方便管理维护  丰富的api特性
   - fastmock   易用
   - json-sever  初学
   - 第三方开源接口  比如netseacloudmusic
   - node + mysql  全栈


- 全栈
   - 大前端
      vue3/react js, node js


- 后端音乐接口在 http://localhost:3000 
- 前端vue 单页应用SPA 
   端口 对应一个应用
   domain -> ip -> 定位服务器



- 依赖
   npm i @types/node  安装node的path模块
   1. 在vite.config.ts中配置：
      resolve:{
         alias:{
         '@':resolve(__dirname,'src')
         }
      }
   2. 在tsconfig.json里配置：
      "baseUrl": ".",
      "paths":{
      "@/*":[
        "src/*"
         ]
      }

- 多级路由配置
   children


- css准备工作
   1. stylus
      vite 会自动编译
   2. reset 
   3. variable mixin 的全局引入
   4. iconfont  

