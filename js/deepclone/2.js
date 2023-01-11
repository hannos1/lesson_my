const obj = {a:1,b:2,c:3}
// const o = obj // 赋值
const o = JSON.parse(JSON.stringify(obj))
console.log(o)
o.a = 2;
console.log(o,obj)