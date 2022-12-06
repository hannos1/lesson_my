function findOdd(A) {
  let arr = A;
  let dictionary = [];
  for(let i = 0;i < arr.length;i++){
    console.log(arr[i],dictionary[arr[i]])
    if(typeof dictionary[arr[i]] === "undefined"){
      dictionary[arr[i]] = 1;
      console.log(dictionary[arr[i]])
    }else{
      dictionary[arr[i]] += 1;
    }
  }
  
  for(let key in dictionary){
    if(dictionary[key] % 2 === 1)return key;
  }
}


let str = 'sjdlkf  ';
console.log(str.indexOf(' '));

