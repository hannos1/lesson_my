import {Todo} from '../types/todo'

export const TODOSKEY = 'TODOS_KEY'

export function saveTods(todos:Array<Todo>){
    localStorage.setItem(TODOSKEY,JSON.stringify(todos));
}

export function getTodos():Todo[]{
    return JSON.parse(localStorage.getItem(TODOSKEY) || '[]')
}