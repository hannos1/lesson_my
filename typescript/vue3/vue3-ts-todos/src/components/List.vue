<template>
    <div class="todos-main">
        <Item v-for="(todo,index) in todos" 
        :key="todo.id" 
        :todo="todo" 
        :deleteTodo="deleteTodo" 
        :updeteTodo="updateTodo" 
        :index="index" />
    </div>
</template>

<script setup lang="ts">
import Item from './Item.vue'
defineProps(['todos','deleteTodo','updateTodo'])

</script>

<style scoped>

</style>