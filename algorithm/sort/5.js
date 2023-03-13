const bubbleSort = arr =>{
    console.time('冒泡排序耗时');
    const length = arr.length;// 缓存数组长度 变量
    // 相邻  一趟循环 搞定一个位置顺序是对的
    for(let i = 0;i < length - 1;i++){
        for(let j = 0;j < length - 1 - i;j++){
            if(arr[j] > arr[j+1]){
                // const temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp;
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    // return arr;
    console.timeEnd('冒泡排序耗时');
}

const arr = [5,8,6,3,9,2,1,7];
bubbleSort(arr)
console.log(arr);