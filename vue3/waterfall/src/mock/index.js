import Mock,{ Random } from 'mockjs'
// 拦截axios发出的请求
Mock.mock(/\/goods/,'get',()=>{
    const data = [];
    const maxNum = 400;
    const minNum = 100;
    for(let i = 0;i < 20;i++){
        let randomHeight = parseInt(
            Math.random()*(maxNum - minNum + 1) + minNum
        )
        let item = {
            id:i,
            title:Random.ctitle(),
            pic:Random.image(`180x${randomHeight}`,'#FF6600'),
            height:randomHeight
        }
        data.push(item)
    }
    return data;
})

