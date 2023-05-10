# 缓存
fs从硬盘读取index.html  花时间 回调函数 -> err(文件不存在/固态硬盘和机械硬盘) data 

- readFileSync 同步 性能不好
- readFile 默认就是异步
- 流的概念
    二进制文件的处理思想
    fs.createReadStream()

- 图片格式
    jpg  png(透明)
    webp 同样的清晰度下 体积只有1/2 1/3

- 缓存
    1. 服务器端开启缓存   强缓存Exipres
        - 返回资源的同时  Expires 和 过期时间  HTTP 1.0  setHeader('Expires', new Data.toGMTString)
            本地缓存时 Exipres写入
        - 再次请求  /two.png   询问前端缓存  有没有缓存
            本地的时钟和缓存的Exipres时间比较  强制走缓存 或者 走后端
        - 缺点是本地时钟做判断，不准确   Expires不准确  
    2. HTTP 1.1 更新  Cache-Control  相对时间
        maxAge  倒计时  

- 强缓存
    expires http 1.0 
    cache-control max-age

    - 缓存过期了怎么办？一定要重新请求嘛？
        强缓存过期 但是服务器文件变了 | 没变

- 协商缓存
    Last-Modified + If-Modified-Since
    Etag + If-None-Match
    
