import Mock from 'mockjs'
import swiperList from './data/swiperList'
import videosList from './data/videosList'
// - 假接口要满足什么？  数据  url

Mock.setup({
    timeout:'50-1000'  //随机延迟时间，模拟请求耗时
})
// 拦截App中的xhr 请求  匹配路径
// 轮播图  
Mock.mock(/\/swiperList/, 'get', () => {
    return {
        code:0,
        result:swiperList
    }
})

Mock.mock(/\/videosList/,'get',()=>{
    return{
        code:0,
        result:videosList
    }
})

