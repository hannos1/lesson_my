# vue3 写商城
- 简历需要

- 工程化
    .vue    style  lang="stylus"  css  工程  stylus | less
    stylus  ->  vite  ->  npm i stylus  -> css  -> 页面上的css

- 商城应用npm包
    - vant  移动商城
    - lib-flexible  移动端屏幕适配库  rem
    - vue-router  路由

- 架构（目录的意义）
    vite 工程化  项目模板
    - src  开发目录
        - assets  静态资源目录
            css image
            main.css  base.css  @import 模块化
        - views  页面级别组件
        - common  文件夹
            通用，和具体业务无关，可以在任何页面，任何项目
            style 通用样式
                - minxin.styl
                    专门放通用的混合函数的地方
        - service  api
            定义接口的地方 方便统一管理  
            每个页面的接口一个文件

- 异步解决方案
    - promise  es6  pending  ->  fullfiled
    - 同步化  异步流程难控制
    - es8  async + await  多个异步任务要同步化的时候  thenable  要简化

- 全家桶
    - vue-router
        - redirect
            流程如下
            - 访问'/'  ->  /
            - 假如'/' 配置了  component:Home.vue 200成功
            - 但是没配，redirect
                没有直接给浏览器响应 
                给浏览器发送了一个跳转指令
                再次发出请求  '/home'

- stylus
    css 全新写法， 写起来更快， 很多高级功能
    - npm i stylus
        安装stylus  css预编译器
        用全新写法来写css，stylus，帮我们自动编译css
    - .vue style lang="stylus"
    - 不用写{} :;  快
        写了也没问题
    - 表达父子元素  css 模块
        缩进  自动加上父元素的限定
    - 混合mixin
        形式上是函数
        封装某个功能样式的集合
        混合到调用它地方
    - 申明变量
    - scoped
        防止css 类名冲突
        给组件加data-v-hash唯一值
        选择器加上属性选择器


- main.js 入口文件 
    - 完整的vue全家桶
        router spa单页应用
    - 组件库
        vant element3 element-plus 按需加载
        css库文件
    - css准备工作
        - main.css
            - reset
                - *,*::before,*::after 
                - 移动端box-sizing: border-box  IE盒模型  更有利于布局
                - font-family  -apple-system
                - 高分辨率手机  抗锯齿  让文字更清晰
                    text-rendering
                    -webkit-font-smoothing: antialiased;
                - 全局css 变量的申明  主题及样式的管理  复用
        - 图标字体库
            iconfont
            引入第三方  link
        - 移动应用
            rem  适配  html fontSize  动态  1rem = 设计稿的多少 750px
            第三方框架  lib-flexible
            Mobile First  80%
            PC  工作  管理  后台
