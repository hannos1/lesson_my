# 同学列表
    - 前后端分离
        table 前端
        后端

        GET HTTP Method
        /student
        返回json 数据

-   npm init -y 将项目变成后端项目

    npm i json-server  加入package.json

    npm cache clean --force 清理缓存，报错时用

    npm install json-server 下载json-server

    修改package.json脚本区,这里是直接绑定文件  "dev": "json-server --watch student.json"

    npm run dev  运行脚本

- form表单数据
    document.forms.addEventListener('submit',(event) => {}) 添加侦听事件 按钮要type="submit"
    event.preventDefault 阻止默认行为，防止直接跳转

- http 请求分为 GET POST 这个是form的动作
    fetch的配置项  GET表示获取列表 POST表示添加新数据
    fetch(url,{
        method:'POST',
        body:JSON.stringify(student),
        headers:{
            'Content-Type':'application/json'
        }
    })

- localStorage.setItem('key',value)   value只支持string   JSON.stringify(value)  JSON.parse()

    


    