// js里如何提升数据的完整性
// JS 弱类型语言所以没有interface  js有太多糟粕  
export interface IProduct{// 接口  检查类型  代码在运行前就报错
    // 类似sql语句表的定义
    id: number; // 分号
    title: string;
    price:number;
    inventory:number;
}
const _products:IProduct[] = [
    {
        id:1,
        title:'iPad 4 Mini',
        price:500.01,
        inventory:2
    },
    {
        id:2,
        title:'H&M T-Shirt White',
        price:121212,
        inventory:2
    },
    {
        id:3,
        title:'Charli XCX -Sucker CD',
        price:19.99,
        inventory:5
    }
]



export const getProducts = async () => {
    // 延迟加载
    await wait(1000)
    // console.log(_products)
    return _products
}


export const buyProducts = async () => {
    await wait(1000)
    return Math.random() > 0.5
}


function wait(delay:number){
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}
