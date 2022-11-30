function findOutlier(integers){
    var arr = integers;
    var oddcounter = 0;
    var evencounter = 0;
    for(let i = 0;i<arr.length;i++){
      console.log(arr[i])
      if(arr[i]%2 === 0){
        evencounter++;
      }else{
        oddcounter++;
      }
    }
    
    if(evencounter === 1){
      for(let i = 0;i<arr.length;i++){
        if(arr[i]%2 === 0) return arr[i];
      }
    }else{
      for(let i = 0;i<arr.length;i++){
        if(arr[i]%2 === 1) return arr[i];
      }
    }
  }