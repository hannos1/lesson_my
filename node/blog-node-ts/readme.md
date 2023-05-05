- ts -> js才能运行
    typescript tsc
    tsc-watch  热更新 
    tsconfig.json  exclude target 
    @types/express 类型声明文件

- 新的架构 
- dotenv 解决安全问题
    - 敏感信息放在.env中
    - dotenv.config()
        node操作系统
    - process.env 解构出port
    - .gitignore .env不上传
    - 在信的过的同事间共享

- 介绍下http状态码 响应的场景
    - 1xx 正在运行中 http://www.baidu.com -> 101 switch Protocl -> https://
    - 2xx 成功 201 成功添加
    - 3xx 跳转
    - 4xx 用户端出错
        400 Bad Request 用户没有按要求完成
        401 Unauthorized 未登录
        403 Forbidden 没有权限
        409 Conflict 冲突
    - 5xx 服务器错误

- 错误处理中间件
    - 应用中最后的中间件是错误处理中间件
        错误无处不在 js 的单线程 带宽和服务器的性能 硬件
    - 有四个参数
        error 是第一个
        next(new Error("")) 只有错误处理中间件才能处理

- 企业级Node开发思路
    - 中间件开发模式
        - npm 通用中间件
            cors json() bodyParser()...
        - 路由中间件/错误处理中间件...
        - 进入到路由的业务处理中间件来模块化处理
            Router -> 参数校验 -> 功能1 -> ... -> 功能n -> 数据库操作 -> 返回
    - HTTP 状态码标准 
    - 架构
        每个路由模块中
        - xxx.router.ts
        - xxx.middleware.ts
        - xxx.controller.ts
        - xxx.service.ts
        - xxx.model.ts
        - xxx.test.ts
        
