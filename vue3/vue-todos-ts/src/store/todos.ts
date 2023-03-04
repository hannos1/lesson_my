import { nanoid } from 'nanoid';
import {defineStore} from 'pinia' // 某个模块的状态函数化
import { reactive,ref,Ref } from 'vue'

type Todo = {id:string;text:string;isComplete:boolean;} //自定义类型
const lsKey = '_v_todos'

export const useTodoStore = defineStore('todos',() => { 
    // 泛型 <>
    const todos:Ref<Todo[]> = ref([]) // 每一项的类型
    const addTodo = (text:string) => {
        todos.value = [
            ...todos.value,
            {
                id:nanoid(),  // 生成唯一的id
                isComplete:false, // 未完成
                text:text  // 文本内容
            }
        ]
        updateLocalStorage()
    }

    const updateLocalStorage = () => {
        localStorage.setItem(lsKey,JSON.stringify(todos.value))
    }

    const initFromLocalStorage = () => {
        const lstodos = localStorage.getItem(lsKey)
        if(lstodos === null){
            todos.value = []
        }else{
            todos.value = JSON.parse(lstodos)
        }
    }
    
    return {
        todos,
        addTodo,
        initFromLocalStorage
    }
})