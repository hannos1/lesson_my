// 1 + 1 = 2 不用再计算了
function add(a,b){
    return a + b;
}

// 假设memorize可以实现函数记忆
// memorize 函数  add -> 
var memoizedAdd = memorize(add);
memoizedAdd(1,1);