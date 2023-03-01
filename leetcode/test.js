function backstack(result,digits,map){
    let arr = map[digits.charAt(0)]
    let newresult = []
    for(let i = 0;i < result.length;i++){
        for(let j = 0;j < arr.length;j++){
            let temp = result[i] + arr[j]
            newresult.push(temp)
        }
    }
    backstack(newresult,digits.substring(1),map)
}