let activeEffect = null
const targetMap = new WeakMap() // targetMap依赖图谱，为了依赖函数的查找，o(1)时间复杂度，单例模式好管理可以全局访问
export function effect(fn,options = {}){// fn就是回调函数 options: lazy schedular
    const effectFn = () => {
        // 容错
        try{
            activeEffect = effectFn
            return fn()
        }finally{
            activeEffect = null
        }
    }
    if(!options.lazy){
        // 同步执行
        effectFn() // 触发proxy get
    }
    effectFn.scheduler = options.scheduler // watchEffect
    return effectFn // 返回的函数不会被立即执行 可以返回到外面再用数组来管理
}

export function track(target,type,key){
    let depsMap = targetMap.get(target)  // 第一层查找对象  reactive({num1:1,num2:2})
    if(!depsMap){  // 如果依赖图谱里没有就加进去 否则不加
        depsMap = new Map() 
        targetMap.set(target,depsMap)
        // targetMap.set(target,(depsMap = new Map()))
    }
    let deps = depsMap.get(key) // 同一个num1可能会触发多次get,性能优化
    if(!deps){
        deps = new Set() // effect 去重
    }

    if(!deps.has(activeEffect) && activeEffect){  // 如果effect数组(集合)里没有就加进去
        deps.add(activeEffect)
    }
    depsMap.set(key,deps)
}

export function trigger(target,type,key){
    const depsMap = targetMap.get(target)  // 第一层
    if(!depsMap){ // 如果图谱里没有(可能被垃圾回收了,weekmap)
        return 
    }
    const deps = depsMap.get(key)  // 第二层
    if(!deps){  // 如果图谱里面的是空对象{},没有属性值
        return 
    }
    deps.forEach((effectFn) => {  // 挨个执行
        effectFn()
        // if(effectFn.scheduler){

        // }
    });
}