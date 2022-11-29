//封装
//js正宗写法
//es5 基于对象的原型式

// let obj = {}
// obj.__proto__
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype = {
    siHai(){
        console.log('hi');
    }
}

//es6 面向对象式
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log('hi');
    }
}