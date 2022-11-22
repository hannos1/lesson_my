//pop
//被弹出的元素的值
const arr = [1,2,3]
// console.log(arr.pop());
// console.log(arr.pop());
// 变量的类型由值决定
Array.prototype.pop1 = function(){
    let temp = this[this.length - 1]
    this[this.length - 1] = null
    this.length = this.length - 1;
    return temp;
}
arr.pop1()
console.log(arr)
