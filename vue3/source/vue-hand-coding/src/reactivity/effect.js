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

export function track(){

}

export function trigger(){
    
}