let cai = {
    name:'skjfd',
    sayHi(){
        console.log('hi');
    },
}

let aTao = {};
//任何一个对象都拥有的私有属性__proto__
console.log(aTao.__proto__)
console.log(cai.__proto__);
aTao.__proto__ = cai;
console.log(aTao.name);
console.log(aTao.__proto__)
console.log(cai.__proto__);


