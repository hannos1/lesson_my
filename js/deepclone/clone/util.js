// module.exports = function clone(target) {  // common.js
// export default function clone(target){  // es6
//     if (typeof target === 'object') {
//         let cloneTarget = Array.isArray(target) ? [] : {};
//         for (const key in target) {
//             cloneTarget[key] = clone(target[key]);
//         }
//         return cloneTarget;
//     } else {
//         return target;
//     }
// };

export default function clone1(target,map = new Map()){
    // if(typeof target === 'object'){
    if(isObject(target)){
        const isArray = Array.isArray(target)
        let cloneTarget = isArray ? [] : {}
        if(map.get(target)){
            return map.get(target)
        }
        map.set(target,cloneTarget);
        const keys = isArray ? undefined : Object.keys(target);
        // for(const key in target){
        //     cloneTarget[key] = clone(target[key],map);
        // }
        forEach(keys || target, (value , key) => {
            if(keys){ // 如果不是数组
                key = value
            }
            cloneTarget[key] = clone(target[key],map)
        })
        return cloneTarget
    }else{
        return target;
    }
}

// 性能优化
function forEach(array,iteratee){
    let index = -1;
    const length = array.length;
    while(++index < length){
        iteratee(array[index],index)
    }
    return array
}


// 其他引用类型
function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}


function getType(target) {
    return Object.prototype.toString.call(target);
}

function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}

const mapTag = '[object Map]'
const setTag = '[object Set]'
const arrayTag = '[object Array]'
const ObjectTag = '[object Object]'
const argsTag = '[object Arguments]'
const deepTag = [mapTag,setTag,arrayTag,ObjectTag,argsTag]


export default  function  clone (target,map = new Map()){
    // 克隆原始类型
    if(!isObject(target)){
        return target;
    }

    //初始化
    const type = getType(target)
    let cloneTarget;
    if(deepTag.includes(type)){
        cloneTarget = getInit(type);
    }

    // 防止循环引用
    if (map.get(target)) {
        return map.get(target);
    }
    map.set(target, cloneTarget);

    // 克隆set
    if (type === setTag) {
        target.forEach(value => {
            cloneTarget.add(clone(value,map));
        });
        return cloneTarget;
    }

    // 克隆map
    if (type === mapTag) {
        target.forEach((value, key) => {
            cloneTarget.set(key, clone(value,map));
        });
        return cloneTarget;
    }

    // 克隆对象和数组
    const keys = type === arrayTag ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
        if (keys) {
            key = value;
        }
        cloneTarget[key] = clone(target[key], map);
    });

    return cloneTarget;
}