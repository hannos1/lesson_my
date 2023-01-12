import {createStore} from 'vuex'

const store = createStore({
    // 所有组件都可以共享的数据         读操作
    state(){
        return {
            count:666
        }
    },
    // 写操作
    mutations:{
        add(state){
            state.count++
        }
    }
})


export default store