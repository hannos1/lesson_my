const http = require('http')

const server = http.createServer() // eventEmitter实例
// on想到了什么？ 
server.on("request", async (req,res) => {
    // 耗时任务 post请求的data  文件写入
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*") // cors 跨域方案，cors库底层是使用自定义的http头部允许服务器和浏览器相互了解
    // 与HEAD类似  客户端查看服务器端的性能等指标
    if(req.method === "OPTIONS"){
        res.status = 200
        res.end()
        return 
    }

    res.end('hello world')
})

server.listen(8888, () => console.log('listen port 8888'))