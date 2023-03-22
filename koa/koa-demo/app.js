const Koa = require('koa')
const config = require('./config/default.js')
const signupRouter = require('./routers/signup.js')
const postsRouter = require('./routers/posts.js')
const path = require('path')
const views = require('koa-views')
const app = new Koa()
const staticCache = require('koa-static-cache')

app.use(staticCache(path.join(__dirname,'./public'),{dynamic:true},{
    maxAge:15*24*60*60 // 15天
}))
// 配置view映射地址
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}))
// 洋葱模型
// blog  网站   
// 一个函数解决一个问题

// 如何记录一个请求所花时间
// 记时开始
// app.use(async (ctx,next) => {
//     console.log('中间件1')
//     const start = new Date().getTime()
//     await next()
//     const end = new Date().getTime()
//     console.log('请求花费时间为',end - start,'ms')
// })

// app.use(async (ctx,next) => {
//     console.log('中间件2')
//     const data = await getData()
//     ctx.body = {data}
// })

// const getData = async () => {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, 1000)
//     })
//     return 'hello world'
// }



app.use(signupRouter.routes())
app.use(postsRouter.routes())

app.listen(config.port)

console.log(`listening on port ${config.port}`)