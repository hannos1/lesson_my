# resetful api

- 前后端分离, restful api 是接口定义的标准
- resouce 资源
    一切皆资源  如何暴露资源
    1. 每个资源都有独立的链接
    2. api 地址设计规则
        读所有文章   Get(HTTP Method的语义)  资源的读操作
        http://localhost:3000/posts  GET
        读id为1的文章
        http://localhost:3000/posts/1  GET

        新增内容 post  {"body": "some comment","postId": 2}
        http://localhost:3000/posts  POST新增

        获取第1篇文章的所有评论
        http://localhost:3000/posts/1/comments  GET

        修改第id篇文章的标题
        http://localhost:3000/posts/:id   PUT替换  PATCH局部更新

        删除一个评论
        http://localhost:3000/comments/:id  DEL

        