<template>
  <div>
      <input type="text" v-model="title" @keydown.enter="addTodo">
      <ul v-if="todos.length">
          <li v-for="(todo,index) in todos" :key="index">
              <input type="checkbox" v-model="todo.done" />
              <span :class="{done: todo.done}">{{todo.title}}</span>
          </li>
      </ul>
      <div v-else>暂无数据</div>
      <div>
          全选
          <span>{{ active }} / {{ all }}</span>
      </div>
  </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  let title = ref("")
  
  let todos = ref([])
  let active = computed(() => todos.value.filter(v => !v.done).length)
  let all = computed(() => todos.value.length)
  function addTodo() {
      todos.value.push({
          title: title.value,
          done: false
      })
      title.value = ''
  }
  
  
  </script>
  
  <style>
  .done {
      text-decoration: line-through;
      color: #ccc;
  }
  </style>