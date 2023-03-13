const  bubbleSort = arr => {
    let tmp = 0;    // 中间变量
    let lastExchangeIndex = 0; // 无序数列的边界
    let len = arr.length;
    let sortBorder = len - 1; // 已经排好的边界

    for(let i = 0; i < len; i++){
        let isSorted = true;
        for(let j = 0; j < sortBorder;j++){
            if(arr[j] > arr[j+1]){
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                isSorted = false;
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex;
        if(isSorted){
            break;
        }
    }
    return arr;
    

}