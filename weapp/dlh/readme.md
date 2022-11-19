- 内置了很多组件
    复用
    swiper> swiper-item 组件

- wxml 里 {{}} 模板
    在页面上显示出来
    页面上如果有多个循环片段需要输出的话
    wx:for 指令  wx:key 唯一值 就可以正确地循环
    每次遍历时 子元素都叫item

- css 在哪写？
  page/xxx.wxss 业务样式 跟具体页面相关
  如果有些通用样式呢? app.wxss 上

- 模块化 面向对象思想

- 事件 bindtap 移动端tap 事件
   事件处理函数 在Page({}) 声明就可以了

- wx.navigateTo({}) wx 命名空间 源源不断地微信查克拉能量