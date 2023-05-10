const http = require('http')
const path = require('path')
const fs = require('fs')
const crypto = require('crypto')

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
                res.setHeader('Cache-Control','max-age=00')
                if(err){
                    res.statusCode = 404
                    res.end('Not Found')
                    return 
                }
                // 
                let md5 = crypto.createHash('md5')
                let rs = fs.createReadStream(abs)
                let arr = []
                rs.on('data', function(chunk){
                    md5.update(chunk)
                    arr.push(chunk)
                })
                rs.on('end',function(){
                    let etag = md5.digest('base64')
                    if(req.headers['if-none-match'] === etag){
                        res.statusCode = 304
                        res.end()
                        return
                    }
                    res.setHeader('Etag',etag)
                    res.end(Buffer.concat(arr))
                })
        })
    })
    .listen(8888)