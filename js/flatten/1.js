var arr = [1, [2, [3,[1], 4], 3], 5];

function flatten(arr){
    var result = [];
    for(var i = 0,len = arr.length;i < len;i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flatten(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result;
}

console.log(flatten(arr))