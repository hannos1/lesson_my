let x = 1, y = 2;// 值拷贝  放在栈内存  stack
let o = {name:'叶'};
let b = o;  // 不是值的拷贝 ， 引用  放在堆内存  heap
b.name = '飞飞';
console.log(o.name);
let z;
z = x;
x = y;
y = z;