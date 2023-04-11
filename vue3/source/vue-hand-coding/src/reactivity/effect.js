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
    return effectFn
}

export function track(target,type,key){
    // console.log(`触发track -> target:${target} type:${type} key:${key}`)
    let depsMap = targetMap.get(target)  // 第一层查找对象  
    if(!depsMap){
        // depsMap = new Map() 
        // targetMap.set(target,depsMap)
        targetMap.set(target,(depsMap = new Map()))
    }
    let deps = depsMap.get(key) 
    if(!deps){
        deps = new Set() // effect 去重
    }

    if(!deps.has(activeEffect) && activeEffect){
        deps.add(activeEffect)
    }
    depsMap.set(key,deps)
}

export function trigger(target,type,key){
    const depsMap = targetMap.get(target)  // 第一层
    if(!depsMap){
        return 
    }
    const deps = depsMap.get(key)  // 第二层
    if(!deps){
        return 
    }
    deps.forEach((effectFn) => {
        effectFn()
        // if(effectFn.scheduler){

        // }
    });
}