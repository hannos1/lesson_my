var add = function(a, b, c) {
    return a + b + c
}

var propValue = function(obj){
    return obj.value;
}

// function memorize(f){
//     var cache = {
//     };
//     return function(){
//         var key = arguments.length + Array.prototype.join.call(arguments, ",");
//         if (key in cache) {
//             return cache[key]
//         }
//         else return cache[key] = f(...arguments)
//     }
// }

var memorize = function(func, hasher) {
    var memoize = function(key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this,arguments) : key);
        console.log(address,'////')
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    // cache 挂载在函数对象上
    memoize.cache = {};
    return memoize;
};

var memoizedAdd = memorize(propValue,JSON.stringify)
var memoizedAdd = memorize(add,function(){
    var args = Array.prototype.join.call(arguments)
    return JSON.stringify(args)
})
// var memoizedAdd = memorize(add,Array.prototype.join)
// var memoizedAdd = memorize(add,add)
console.log(memoizedAdd(1,2,3))
console.log(memoizedAdd(1,4,3))

// console.log(propValue({value:1}))
// console.log(memoizedAdd({value:1}))
// console.log(memoizedAdd({value:2}))