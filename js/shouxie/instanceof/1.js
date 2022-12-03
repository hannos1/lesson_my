// 构造函数
// Function -> Object
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
console.log(aTao instanceof Person)
console.log(aTao instanceof Object)