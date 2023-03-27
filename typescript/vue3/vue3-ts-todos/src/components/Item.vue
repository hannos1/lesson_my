<template>
    <div>
        <li
            @mouseenter="mouseHandler(true)"
            @mouseleave="mouseHandler(false)"
            :style="{ backgroundColor: bgColor, color: myColor }"
        >
            <label>
                <input type="checkbox" v-model="props.todo.isComptete" />
                <span>{{ props.todo.title }}</span>
            </label>
            <button class="btn btn-danger" v-show="isShow" @click="props.deleteTodo">删除</button>
        </li>
    </div>
</template>

<script setup lang="ts">
import {Todo} from '@/types/todo'
import { ref,computed } from "vue";
const props = defineProps({
    todo:{
        type:Object as () => Todo,
        require:true
    },
    deleteTodo:{
        type:Function,
        required:true
    },
    index:{
        type:Number,
        required:true
    },
    updateTodo:{
        type:Function,
        required:true
    }
})
const bgColor = ref('white')
const myColor = ref('black')
const isShow = ref(false)
const mouseHandler = (flag:boolean) => {
    if(flag){
        myColor.value = 'green'
        bgColor.value = 'pink'
        isShow.value = true
    }else{
        myColor.value = 'black'
        bgColor.value = 'white'
        isShow.value = true
    }
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>