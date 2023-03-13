const insertSort = (arr) =>{
    // 缓存数组长度
    const len = arr.length;
    // 保存需要插入的元素
    let temp 
    for(let i = 1; i < len;i++){
        let j = i;
        temp = arr[i];
        while(j > 0 && arr[j - 1] > temp){
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}

console.log(insertSort([4,3,5,2,5,5,5]))