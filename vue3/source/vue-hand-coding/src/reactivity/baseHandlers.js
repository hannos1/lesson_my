import { track, trigger } from './effect'
import {
    reactive, 
    ReactiveFlags,
    reactiveMap,
    shallowReactiveMap
} from './reactive'
import {isObject} from '../shared'
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

const shallowReactiveGet = createGetter(true) // 所以说浅层代理跟深层代理只有set时的区别

function createGetter(shallow = false){ // shallow 是否取消深层代理
    return function get(target,key,receiver){ // 这三个参数再proxy触发get时传入 proxy.get = createGetter()  proxy.get(target,key,receiver)
        
        // const isExistMap = () => key === ReactiveFlags.RAW && (receiver === shallowReactiveMap.get(target))

        // if(key === ReactiveFlags.IS_REACTIVE){
        //     return true
        // }else if(isExistMap()){
        //     return target
        // }

        // es6 提供的映射API
        const res = Reflect.get(target,key,receiver) // 找到target[key]
        // console.log(receiver,res)

        track(target,"get",key) // 收集依赖

        if(isObject(res)){ // 看看第二层是不是一个对象,如果不是就直接返回值(其实就是浅层代理)
            return shallow ? res : reactive(res)  // 如果开启浅层代理就同简单对象处理,否则就把第二层页继续代理一下
        }

        return res 
    }
}

export const mutableHandlers = {
    get,
    set,
    has,
    deleteProperty
}


export const shallowReactiveHandlers = {
    get:shallowReactiveGet,
    set,
    has,
    deleteProperty
}