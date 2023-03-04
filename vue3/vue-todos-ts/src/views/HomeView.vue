<script setup lang="ts">
import {useTodoStore} from '../store/todos'
// import {useProductStore} from '../store/products'
import {ref} from 'vue'

let currentTodoInp = ref('')
const todoStore = useTodoStore()
// const productStore = useProductStore()

// todoStore.addTodo('十天后面试')
// productStore.fetchAll()
todoStore.initFromLocalStorage() //初始化localStorage 把持久化数据更新到store中

const addTodo = () => {
    const text = currentTodoInp.value
    currentTodoInp.value = ''
    if(text.trim() !== ''){// 去除首尾空格
        todoStore.addTodo(text)
    }
    
}

</script>

<template>
    <main>
        <h1>Todos</h1>
        <form class="addForm" @submit.prevent="addTodo">
            <label for="add">Add todo</label>
            <div class="sl">
                <input type="text" name="add" id="add" v-model="currentTodoInp">
                <button type="submit">Add</button>
            </div>
        </form>
    </main>
</template>

<style scoped>

</style>
