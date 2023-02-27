import {reactive,inject} from 'vue'

function createStore(options){
    // store 实例
    // install  app.use  vue和周边生态的约定
    // 面向对象封装思想
    // 只在mian.js 入口调用一次
    return new Store(options)
}

// function + prototype
class Store{
    constructor(options){
        // this -> store
        this.$options = options
        // _表示私有变量
        this._state = reactive({
            data:options.state()
        })
        this._mutations = options.mutations //编程规范上，mutation不能改
    }

    get state(){
        console.log('------')
        return this._state.data
    }

    
    // set state(newValue){
    //     this._state.data = newValue
    //     console.log(this._state.data)
    // }

    install(app){
        app.provide(STORE_KEY,this)
    }

    commit(type,payload){
        const entry = this._mutations[type]
        console.log(type,'///',entry,'////');
        entry && entry(this.state,payload)
    }
}

const STORE_KEY = '__store__'
function useStore() {
    return inject(STORE_KEY) // 引用
}



// export default 在一个模块中只能用一次
export  {
    createStore,
    useStore
}

// export const PI = 3.1415926
// export const area = (r) => 2*PI*r