function isPalindrome(str){
    //缓存字符的长度
    const len = str.length;
    for(let i = 0;i<len/2;i++){
        if(str[i] !== str[len - 1 - i]){
            return false;
        }
    }
    return true;
}


function maskify(cc) {
    if(cc.length<=4)return cc;
    const str = cc.substring(0,cc.length-4);
    return str.replace(/[\w\W]/g,'#') + cc.substring(cc.length - 4);
  }

  console.log(maskify('4556364607935616'))