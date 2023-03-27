# vue3 + ts
- vue3 以前对ts类型系统支持不是很友好
    vue3框架本身是用typescript写的
- vue3借鉴了react 和hooks函数式编程 setup + composition API 抛弃落后的类式组件 
- react 单向数据流  vue 双向数据流 v-model
- vue有指令 语法更优雅   react 门槛更高

- 相同点: proxy响应式代理  而vue2 defineProperty 不能对数组进行监听
- MVVM开发框架


- vue3 + ts注意的地方
    - 项目架构会有types目录 类型的申明 多半为数据接口
    - alias vite.config.ts + tsconfig.json
        path @types/node 
        @types/vue-router
    - reactive 对对象进行代理 ts的重点
        <{todos:Todo[]}>


- 依赖
    npm i @types/node