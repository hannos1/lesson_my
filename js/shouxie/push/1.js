// 数组 优势是 以O(1)的时间访问到 第i个元素
const arr = [1,2,3]
console.log(arr.push(4),'/////')
// arr.push(4);
// console.log(arr)

// 如何在arr object 上添加 push2
Array.prototype.push2 = function(num){
    // arr [1,2,3,4]
    // console.log('------')
    console.log(num,'------')
    //如何拿到arr?
    console.log(this)
    // this -> arr,最后一个下标是 length - 1
    this[this.length] = num;
    return this.length;//返回值
}

arr.push2(4)
console.log('arr:',arr)