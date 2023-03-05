<template>
    <div>
        {{ JSON.stringify(props.banners) }}
    </div>
</template>

<script setup lang="ts">
import { onMounted,onUpdated } from 'vue';

const props = defineProps({
    banners:{
        type:Array,
        default:[]
    }
})

onMounted(() => {
    console.log(props.banners)
})

// onUpdated(() => {
//     console.log(props.banners)
// })
</script>

<style lang="stylus" scoped>

</style>