# SPA  优质的现代用户体验
1. 不要通过a 标签跳转页面白一下
    click  event.preventDefault() 阻止默认行为
    index.html#/page1  index.html#/page2  index.html#/page3 url hasn 部分    不会刷新页面
    
    不同的url来匹配不同的资源

2. url的hash部分改变  请求新的内容
    并且页面不会重新刷新

3. url 分成以下几部分  
    js  url  属于  BOM(浏览器对象模型)  location对象
    http://127.0.0.1:5555/js/router/hash/index.html?a=1#/page1
    location.protocol    http:  ->  https:
    location.hostname    127.0.0.1
    location.port        5555
    location.pathname    /js/router/hash/index.html
    location.search      ?a=1
    location.hash        #/page1    发生改变不会刷新页面
    