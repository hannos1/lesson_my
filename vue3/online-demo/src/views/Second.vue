<template>
    <div>
        second
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { getSecond } from '../service/second';
// getSecond()
onMounted(() => {
    getSecond()
})

</script>

<style scoped>

</style>