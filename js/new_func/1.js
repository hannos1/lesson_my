var stuA = {
    name:'蔡总',

};

var stuB = {
    name:'刘总',

};


function sayHi(...args){
    console.log(arguments,args,...args);
    console.log(`你好，我是${this.name}`)
}

// stuA,stuB都能sayHi

// sayHi().call(stuB);
// sayHi().call(stuA);

// Object.prototype.sayHi = sayHi;

// sayHi.apply(stuB);

// stuA.sayHi()

sayHi.apply(stuB,[1,2]);
sayHi.call(stuB,1,2);//call将参数一个一个传，apply以数组来传

// var func = sayHi.bind(stuB)//bind不会立即执行，在函数运行时执行
// func();

// sayHi.bind(stuB)();