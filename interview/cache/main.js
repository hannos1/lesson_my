const http = require('http')
const path = require('path')
const fs = require('fs')
// ngnix 多线程，多人访问  500-1000人 负载均衡 访问代理 -> 某台服务器 多核cpu -> node 单线程 (容错处理 try catch)
// cdn 服务器  
// 带宽资源
http
    .createServer((req,res) => {
        if(req.url === '/'){
            fs.createReadStream(
                path.join(__dirname,'index.html')
            )
            .pipe(res)
            return 
        }
        let abs = path.join(__dirname,req.url)
        fs.stat(abs,(err,stat) => {
            if(err){
                res.statusCode = 404
                res.end('Not Found')
                return 
            }
            if(stat.isFile()){
                res.setHeader('Cache-Control','max-age=00')
                if(req.headers['if-modified-since'] === stat.mtime.toGMTString()){
                    res.statusCode = 304
                    res.end()
                    return 
                }
                res.setHeader('Last-Modified', stat.mtime.toGMTString())
                // console.log(stat.ctime.toGMTString()) // 文件最近一次变动的时间戳
                fs.createReadStream(abs).pipe(res)
            }
        })
    })
    .listen(8888)