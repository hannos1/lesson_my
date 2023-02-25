# vue3 写商城
- 简历需要

- vue3 语法
    - 过滤器 filters  main.js.config.globalProperties.$filters 
        computed data -> 计算
        格式转换 进制转换 汇率 语言
        入口可以配置多个过滤器
        app.config.globalProperties.$filters={
            prefix(url){
                if()...
            }
        }

- 设计模式
    DRY  Dont repeat yourself

- 工程化
    .vue    style  lang="stylus"  css  工程  stylus | less
    stylus  ->  vite  ->  npm i stylus  -> css  -> 页面上的css
    vite.config.js  vite  配置文件  工程化定制

- 组件化思想
    state  状态对象，响应式  数据驱动界面
    常规的组件数据都放到state中，由reactive({...})构成
    子组件相对父组件产生数据依赖 热更新
    components 组件 有利于 页面级别组件或者大组件更好维护， template更简洁
    - simple-header  常用组件复用
    - 子组件传参
        const props = defineProps({
            goods: {
                type: Object,
                value: {}  默认值，提升组件适配性
            }
        })
        页面引入时如果用  :goods那么这个值保留js运行区域源格式 否则会变成string 如goods

- 商城应用npm包
    - vant  移动商城
    - lib-flexible  移动端屏幕适配库  rem
        组件会自动让根节点的font-size = 屏幕宽度/10 = 1rem  容器相对于屏幕的百分比除以10%如(5px/375px)/0.1 = 宽度/37.5
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
    - &.active
        & 引用上一级选择器


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



- axios
    - 会返回response对象，更专业 包含各种数据项
    - 拦截器 interceptors 
        axios request / response 
        return res.data 

- 骨架屏方案 用户体验优化
    skeleton  vant 
    <van-skeleton :row="3" :loading="state.loading" >
        template 在loading为true时显示出来
    </van-skeleton>



- 图片懒加载
    - html 文件中 link src img script 启动新的http请求
        请求并发数  越多  页面加载就越慢
    - 可视区内图片加载
    - 非可视区延迟加载，可视区滚动到哪里加载相应图片
    - vant 内置了Lazyload
        vue directives 指令集  自定义指令集 v-lazyload
        命令组件或标签做相应的事情
    - base64 vant使用了更小的占位图片  可以放到css，js文件中 减少并发数

- vue-router 细节考点
    - 懒加载
    - router-link  激活路由
        .router-link-active
    - 路由的跳转
        - 全局对象Router vue-router  useRouter() 组件里随时拿到
            push  go  currentRoute
        - 当前路由  Router.currentRoute()
            useRoute() 当前路由对象
            route.params
        - useRoute()  使用一下  hooks 编程
            use开头的函数的称呼
    - 路由切换动画
        vue transition
        slide-left  slide-right
        首页 -> detail
        transition  由右向左  <transition> vue内置组件
        v-if v-show  router-view  挂载节点时 transition会自动添加.v-enter-active  类名钩子  不用:class来设置了
        .v-enter-active{
            定制能力很高
        }
        卸载时 自动添加 v-leave-active类名钩子
        transiton组件可以添加name属性指定不同的效果

- 内置组件component
    - <component :is="Component" /> 动态绑定组件 通过is值来决定哪个组件在这里被渲染 
