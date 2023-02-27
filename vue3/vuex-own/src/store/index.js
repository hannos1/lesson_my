import { createStore, useStore } from './gvuex.js'

// - creatStore 创建单一状态树
// const {createStore} = Vuex
const store = createStore({
    state(){
        return {
            count: 1
        }
    },
    mutations:{
        add(state){
            state.count++
        }
    }
})



export default store