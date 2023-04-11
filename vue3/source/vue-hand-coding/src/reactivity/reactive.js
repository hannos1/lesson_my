// vue中的依赖关系是用"对象"来组织的 key为对象此时用map收集更适合
// 组件卸载 WeakMap会自动删除 弱引用
import {mutableHandlers} from './baseHandlers'
export const reactiveMap = new WeakMap()  // 缓存map 性能优化

export const ReactiveFlags = {
    RAW:"__v_raw",  // 没有响应的对象
    IS_REACTIVE:"__V_isReactive"
}

// 响应式
export function reactive(target){
    // mutableHandlers的属性是代理对象(Proxy)触发get、set、has、delete时相应的回调函数
    return createReactiveObject(target,reactiveMap,mutableHandlers)
}


function createReactiveObject(target,proxyMap,proxyHandlers){
    if(typeof target !== 'object'){
        console.warn(`reactive ${target} 必须是一个对象`)
        return target
    }
    // 通过proxy创建代理  map里不同的对象存储不同类型的reactive依赖关系
    const existingProxy = proxyMap.get(target)
    if(existingProxy){
        console.log('///////',target)
        return existingProxy  // Proxy代理的是对象 不需要对同一个对象进行多次代理
    }
    const proxy = new Proxy(target,proxyHandlers)
    proxyMap.set(target,proxy)  // 缓存
    return proxy
}