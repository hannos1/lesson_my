var add = function(a, b, c) {
    return a + b + c
}
// memorize 高阶函数 
// memorize 内部生成了闭包函数 并且return给memoizedAdd
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
var memoizedAdd = memorize(add)
// memoizedAdd(1,2,3)
console.time('use memorize') //计时开始
for(var i = 0;i<100000;i++){
    memoizedAdd(1,2,3)
    // add(1,2,3)
}
console.timeEnd('use memorize')