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
        <button class="clear" @click="todoStore.clearComletedTodos()">
            Clear completed todos
        </button>
        <div class="prog">
            <progress
                :max="todoStore.todos.length"
                :value="todoStore.completedTodos.length"
            >
            </progress>
            <p>
                <b>{{todoStore.completedTodos.length}} / </b>
                <b>{{todoStore.todos.length}}</b>
            </p>
        </div>
        <ul class="todos" v-for="todo in todoStore.todos" :key="todo.id">
            <li class="todo">
                <label :for="todo.id" :class="{'completed':todo.isComplete}">{{todo.text}}</label>
                <input type="checkbox" name="isCompleted" :id="todo.id" :checked="todo.isComplete" @change="todoStore.toggleTodo(todo.id)">
                <button @click="todoStore.deleteTodo(todo.id)">删除</button>
            </li>
        </ul>
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
progress {
  width: 100%;
}
.prog {
  margin-bottom: 1.5rem;
}
.prog > p {
  text-align: end;
  margin-top: 0rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  padding: 0.25rem 0;
  font-size: 1.5rem;
}
input[type="checkbox"] {
  display: inline-block;
  padding: 1rem;
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}
.clear {
  margin-bottom: 1.5rem;
  border: 1px solid hsl(244, 7%, 54%);
  color: hsl(247, 34%, 85%);
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 12px;
  cursor: pointer;
}
label.completed {
  color: hsl(245, 20%, 76%);
  text-decoration: line-through;
}
.addForm {
  margin-top: 1rem;
  border-top: 1px solid #242424;
  padding: 1rem 0;
}
.addForm > label {
  display: block;
  color: #ccc5d8;
}
.sl {
  display: flex;
  margin-top: 0.25rem;
}
.sl > input {
  border: 1px solid #3f3f3f;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  margin-right: 0.25rem;
  width: 100%;
}
.sl > button {
  border-color: #42d392;
  background-color: #42d392;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: #1a1a1a;
}

</style>
