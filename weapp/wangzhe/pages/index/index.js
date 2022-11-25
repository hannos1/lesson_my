// index.js
// 获取应用实例
const app = getApp()

Page({
  // 用占位符{{}} 驱动模板wxml显示
  data: {
    nav:[],
    heroList:[],
  },
 // 生命周期事件 页面渲染完成时触发
  onLoad() {
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      // 服务器数据url
      url: 'https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue/hero',
      // 成功回调函数
      success:(res) => {
          wx.hideLoading();
          // console.log(res);
          // http statusCode 200 服务器端没有任何错误发生
          // if(res.statusCode === 200){
          if(res.errMsg === 'request:ok'){
            // let nav = res.data.nav;//解析res数据
            // console.log(nav);
            // let list = res.data.heroList;
            // console.log(list);
            let data = res.data;
            //解构
            let {nav,heroList} = data; 
            // console.log(nav,heroList);
            // console.log(this,'////');
            // API设置数据
            // this.data.nav = nav 没用
            // 设置data数据，必须调用setData({})
            // 设置的同时 自动渲染模板
            this.setData({
              nav:nav,
              heroList:heroList,
            })
          }          
      },
      //失败回调函数 es6函数的新写法--箭头函数
      fail:() => {
          console.log('error')
      },
    })
  },
})
