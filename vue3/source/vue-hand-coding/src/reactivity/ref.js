import {track,trigger} from './effect'
import {reactive} from './reactive'
import { isObject } from '../shared'

export function isRef(val){ // val的情况：ref()、reactive()、{}、基本类型, 对于(val && val.__isRef)的值 基本类型：false , {}：underfined , ref()：true , reactive()：false 
    return !!(val && val.__isRef)   // 基本类型中有一个null，值也是false，但是null在一个的条件就触发false
}

export function ref(val){
    if(isRef(val)){  // 触发假分支的类型为：基本类型、{}、reactive() , 其中{}需要!!来保证它是一个布尔值
        return val // val = ref() 直接在这里被返回
    }
    return new RefImpl(val) // 简单数据类型的ref
}

// es6 class提供了get set方法
class RefImpl{
    constructor(val){
        this.__isRef = true  // 给响应对象打标签，表示是一个ref对象
        this._val = convert(val) // 一个响应式对象或者基本类型的值
    }
    get value(){  //let val = ref.value 时触发
        track(this,'get','value') // 依赖收集
        return this._val
    }
    set value(val){ // ref.value = xxx 时触发
        if(val !== this._val){  // 如果值没有变化的话不需要响应
            this._val = convert(val)
            trigger(this,'set','value')
        }
    }
}

function convert(val){
    return isObject(val) ? reactive(val) : val
}