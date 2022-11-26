- 地图功能 定位 标点
  1. 组件
    view div  UI 组件
  2.  wx. 微信给我们的强大能力
      坐标  东华理工  
  3. swiper scroll-view 功能组件
    map  组件显示在页面上 



-  需要拿到用户的位置信息 
    app.json permission授权


- 在开发那个页面， app.json 中把页面提前
- 能够wx.request 请求 url?  fastmock 接口请求模拟
  打开要模仿的项目 分析你的数据 使用json结构建起来
  success 
  [
    {
      img:,
      title:,
      subTitle:'',
      author,
      score,
      action:''
    }
  ]


- 移动端界面开发 多用弹性布局 关键
  1. display:flex;  这个地方在文档流中开启了BFC 独立于其他区域
  2. 父容器和子元素的布局方式
     子元素 默认块级能力会丢失, 