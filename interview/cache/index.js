const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        // fs.readFile('./index.html', 'utf8', (err,data) => {
        //     if(err){
        //         res.end('出错了')
        //         return
        //     }
        //     console.log(data)
        // })
        fs.createReadStream(path.join(__dirname,'index.html')).pipe(res)  
        return 
    }
    // async 异步  sync 同步 阻塞
    // const data = fs.readFileSync('./index.html', 'utf-8')
    // console.log(data)
    let abs = path.join(__dirname,req.url)
    fs.stat(abs,(err,stat) => {
        if(err){
            res.statusCode = 404
            res.end('not found')
            return 
        }
        // linux 文件和文件夹都是fs一样的 区别是头信息 标记是否是文件
        if(stat.isFile()){
            // res.setHeader('Expires', new Date(Date.now() + 200000).toGMTString())
            res.setHeader('Cache-Control', 'max-age=20')
            fs.createReadStream(abs).pipe(res)
        }
    })
    console.log(abs)
})

server.listen(3000)