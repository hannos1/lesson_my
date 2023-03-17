const Koa = require('koa')
const route = require('koa-route')
const app = new Koa();

const main = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/about">about page</a>'
}

const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">index page</a>'
}


app.use(route.get('/',main))  // 路由中间件
app.use(route.get('/about',about))
app.listen(3000)
