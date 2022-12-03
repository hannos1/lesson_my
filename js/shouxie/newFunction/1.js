function Person(name,age){
    // 构造
    // 基于原型的面向对象的封装过程  {}
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function(){
    console.log(`你好，${this.name}`)
}
const aTao = new Person('阿涛',17)
/**
 * @func new的过程
 * @params constructor ...
 * 1. 基于对象的 {} 
 * 2. Person  this 构造的过程
 * 3. 手动返回 实例对象 
 */

// ... 是reset运算符
// function myNew(constructor,...args){
function myNew(){
    const obj = {} // 基于对象
    const constructor = Array.prototype.shift.call(arguments);
    // shift返回数组的第一个元素，然后原数组第一个元素消失
    // arguments能用下标访问,但是没有数组的方法
    // console.log(arguments[0]);
    // console.log(typeof arguments,Object.prototype.toString.call(arguments));
    // console.log(arguments instanceof Array);//false

    // constructor.call(obj,...arguments);
    constructor.apply(obj,arguments);
    // console.log(obj)
    obj.__proto__ = constructor.prototype;
    return obj;
}

let lu = myNew(Person,'卢总',17)

lu.sayHi()