- 小程序运行在哪？
   微信里 手机里 客户端 服务端 cs开发

- 数据驱动页面
  1. 先取数据
  2. 模板由数据驱动 

- 小程序请求接口数据
  1. wx.request({
    url:''
  })  js 主动的去请求接口
  2. 先让页面加载,加载完成后
    onLoad 生命周期,放松请求
  3. 安全性高， 详情 不校验合法域名
  4. 请求是一个http的过程 使用http协议
    基于请求响应的协议
  5. success 回调 statusCode 200 
      解析 res
  6. fail 失败
  7. this.setData({})
      设置数据data 并且自动更新页面

- 样式 可滚动的导航
    scroll-view 小程序组件  scroll-x = "{{true}}"
    