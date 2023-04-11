import { track, trigger } from './effect'
import {ReactiveFlags} from './reactive'
const get = createGetter()
const set = createSetter()
const has = () => {}
const deleteProperty = () => {}

function createSetter(){
    return function set(target,key,value,receiver){
        const result = Reflect.set(target,key,value,receiver)
        trigger(target,'set',key)
        return result
    }
}

function createGetter(shallow = false){ // shallow 是否取消深层代理
    return function get(target,key,receiver){
        // const isExistMap = () => key === ReactiveFlags.RAW


        // es6 提供的映射API
        const res = Reflect.get(target,key,receiver) // 找到target[key]
        // console.log(receiver,res)

        track(target,"get",key) // 收集依赖
        return res 
    }
}

export const mutableHandlers = {
    get,
    set,
    has,
    deleteProperty
}