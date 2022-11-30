//匿名函数
//js 变量或常量的类型由值决定
//函数表达式
//回文
const reverse = function(str){
    // let reversestr = '';
    // for(let i = str.length - 1; i>=0;i--){
    //     reversestr += str[i];
    // }
    // return reversestr;
    return str.split('').reverse().join('');
}
console.log(reverse('hello'));
//函数
// function reverse(){

// }