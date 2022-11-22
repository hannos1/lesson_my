const arr = [1,2,3]
// 末尾添加一个元素
// 在末尾添加多个元素
// 返回值是数组的新长度
Array.prototype.push2 = function(num1,num2,num3){
    // 如何得到所有参数 [] arguments
    // this 面向对象内部内部，方法里this指向实例后的对象
    console.log(arguments,'???')
    // 如何获得某个复杂数据类型的具体类型
    // console.log(typeof arguments,Object.prototype.toString.call(arguments))
    for(let i = 0;i < arguments.length;i++){
        this[this.length] = arguments[i]
    }
    return this.length
}
arr.push2(1,2,3)
console.log(arr)
arr.push(4,5)
console.log(arr.push(4,5),arr)