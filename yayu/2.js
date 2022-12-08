// 本分
function add(a,b){
    return a + b;
}
// fn 是等待着被优化的函数
// 闭包  函数内部还有函数
function memorize(f){
    // 缓存结果 使用{}保存  key设计 
    // 
    // console.log(fn,args);
    var cache = {
        // key 是一个字符串
        // "lu":"抖音"
    };
    //作用域
    return function(){
        // console.log('我是inner Function',cache.lu);
        // console.log(Array.prototype.join.call(arguments, ","),'///')
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        // console.log(key)
        if (key in cache) { // in 是json里的运算符
            return cache[key] // 没有运行f
        }
        // else return cache[key] = f.apply(this, arguments) 
        else return cache[key] = f(...arguments)
    }
}
// 函数运行完本来应该被销毁
// 函数进入执行栈  创建函数作用域
var memoizedAdd = memorize(add) // 运行了才会生成闭包函数
// 出栈   内存回收  cache 应该会没有了，但..., 因为cache被接下来的函数引用着
console.log(memoizedAdd(1,2));  // 运行时可以找到生成时上下文环境中的变量
console.log(memoizedAdd(1,2)); 