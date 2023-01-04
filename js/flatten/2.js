var arr = ['1,2',[2,[3,4]],5]

function flatten(arr){
    return arr.toString().split(',').map(function(item){
        return +item;
    })
}

console.log(flatten(arr));