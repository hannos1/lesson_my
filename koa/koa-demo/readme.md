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
        


- 依赖
    npm i koa
    npm i nodemon
    npm i koa-router
