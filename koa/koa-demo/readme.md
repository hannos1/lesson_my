- MVC
    - model 数据层
    - view 视图层
    职责分离 MV 不能直接通信  
    Control 来负责  逻辑计算 参数校验 用户的session
    路由是一个功能 用户进来之后回交给Control
- KOA
    - context = req + res
    - 中间件
        函数

## 后端思维
    MVVM -> MVC
    完整的html
- 3000
    后端安全的一部分?
    配置化

- 洋葱模型
    koa 提供服务和架构的本质，node服务器编程
    123456
    - 每个函数，交给app.use调用都是中间件，middleware
    - 每个middleware中都能拿到ctx next 等参数
    - 按顺序执行 从上到下
    - 如果遇到ctx.response.body 响应数据
        如果不是最后一个，要给next
        如果是最后一个的话，他会沿着洋葱模型 回溯一遍
        不同的用户，不同的任务，会有不同的中间件需求
        数组 数据库链接中间件 肯定要在路由中间件前面
    

- koa路由
    1. app.js  单点入口  模块化
    2. routers 目录 定义路由 
        使用restful-api 名词+动词
        /posts GET POST DELETE PATCH PUT
    3. 路由是作为中间件来启用
        ctx.req  请求行  http 版本号  url  method
        多个路由中间件
        如果url method 和当前洋葱模型执行顺序里的路由中间件匹配，进入控制器函数执行


- koa view层
    1. 传统的mvc  
        经典的后端架构和设计模式
        router -> controller(数据准备，逻辑) -> views (html)
    2. ctx.render
        ctx 是上下文环境 req + res
        可以省略response
        ctx.render = ctx.response.render
    3. views 目录和view层
        配置一下
    4. 使用ejs模板引擎
        {{  }}
        <%= %>
        传统mvc在模板编译后 完整的输出给浏览器
        前后端分离 只有一个挂载点 vue组件动态挂载到节点上
        - MVVM 大型项目，更适合合作，前后端分离，应用打开快体验好
        - 前后端分离缺点是：
            SEO极其差  #root  百度搜索引擎不会解析js ajax数据
            对于手机app里 无所谓SEO的 以体验为先Mobile First
            掘金 csdn 搜狐 非常在乎SEO的不适合  
            所以需要服务器端渲染的vue  nuxt + js
        - MVC 优点SEO
        - koa-views views中间件函数 挂载在app上
            - 配置views 所在
                ctx.render 指定模板名字
            - 指定模板引擎 ejs  pug
                <%= %>
            - 洋葱模型顺序 views中间件  配置性中间件 需要放在路由中间件前面
        - ctx.render
            模板在服务器端编译 返回所有的html 对SEO很友好
                爬虫通过发送请求在建立内容分析  curl
        - PC端 入口在百度
        - 移动端在应用市场  MVVM

- meta viewport
    SEO 要注意meta 标签的使用
    head 里 meta 通常用来丰富页面的信息和属性
    description 页面描述 方便seo 
    keywords 关键词 方便seo
    viewport  用于适配  PC端不用
    移动端 init-scale=1.0  width=device-width  user-scaleable=no   视窗缩放1.0，宽度等于设备宽度，禁用缩放功能
    因为缩放有时候会误操作，触发回到上一页或者下一页
    www.taobao.com -> m.taobao.com  
    PC 一套  nuxt
    mobiel SPA

- 静态资源koa处理
    - css js image
        - 不归动态(逻辑，数据库，服务器端声明内存的)路由管  放服务器集群中
        - 前端写的绝大部分都是静态资源 webpack vite 打包 dist/
            未来会单独放在cdn服务器   静态资源可以前端缓存
    - 单独处理静态资源路由  
    - http://127.0.0.1:3000/index.css 
        静态服务器static + 缓存cache koa-static-cache
        - / 动态服务器路由，首页  url
        - / 静态服务器  静态服务器放在路由前面  link标签
            / -> 配置的 /public
        - 时间内，客户端不用再请求，http优化的重要理解
            200 第一次
            第二次 304 not modified
            maxAge后回去服务器再请求，再更新
            



- 依赖
    npm i koa
    npm i nodemon
    npm i koa-router
    npm i ejs
    npm i koa-views
    npm i koa-static-cache
