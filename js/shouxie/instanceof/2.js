/**
 * @func 判断是否是实例
 * @param {*} left : 对象
 * @param {*} right : 对象
 * @return boolean
 */
function myInstanceof(left,right){
    // right 只要出现在left的原型链的任何一站都可以
    while(true){
        //left __proto__ 原型链查找一直进行下去
        if(left === null)return false;
        if(left.__proto__ === right.prototype){
            return true;
        }
        left = left.__proto__;
    }
}