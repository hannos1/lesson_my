<template>
    
</template>

<script setup>
import {onMounted} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()

onMounted(() => {
    // console.log(route)
    const { from="" } = route.query
    // console.log(from)
})

</script>

<style lang="stylus" scoped>


</style>
