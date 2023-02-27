<template>
    <div>
        {{count}}
        <button @click="add">add</button>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from '../store/gvuex'
const store = useStore() // hooks
const count = computed(() => store.state.count)
const add = () => {
    store.commit('add')
}


</script>


<style  scoped>

</style>