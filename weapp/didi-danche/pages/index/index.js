// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    latitude:39.908860,
    longitude:116.397390,
    markers:[
      // {
      //   id:1,
      //   iconPath:'/images/map-bicycle.png',
      //   "callout":{
      //     content:"有车",
      //     display:'ALWAYS',
      //   },
      //   latitude:28.68194,
      //   longitude:115.96132,
      // },
      // {
      //   id:2,
      //   iconPath:'/images/map-bicycle.png',
      //   "callout":{},
      //   latitude:28.68194,
      //   longitude:115.96198,
      // },
    ],
    map:null,
  },

  onShow(){
    // console.log("onshow");
    this.data.map = wx.createMapContext('myMap')
  },

  toReset(){
    this.data.map.moveToLocation()
  },
  
  onLoad() {
    // console.log("onload");
    wx.showLoading({
      title: '加载中...',
    })

    wx.getLocation({
      type:'gcj02',
      // 箭头函数 不用写function
      success: (res) => {
          wx.hideLoading();
          console.log(res,'///');
          // es6 解构
          let { latitude, longitude } = res;
          this.setData({
            latitude:latitude,
            longitude:longitude,
          })
          this.tocreate(res);
      }   
    })
    
  },
  tocreate(res){
    let ran = Math.floor(Math.random()*20 + 5);
    console.log(ran)
    let markers = [];
    for(let i = 0; i<ran;i++){
      let obj  = {
        id:i,
        iconPath:'/images/map-bicycle.png',
        callout:{},
        latitude:this.data.latitude + Math.random()/1000,
        longitude:this.data.longitude + Math.random()/1000,
        width:52,
        height:30,
      }
      markers.push(obj)
    }
    this.setData({
      markers:markers
    })
  }
})
