<template>
    <div :style="fontstyle">
        <div class="rate" @mouseout="mouseOut">
            <span v-for="num in 5" @mouseover="mouseOver(num)" :key="num">☆</span>
            <span class="hollow" :style="fontwidth">
                <span v-for="num in 5" :key="num"  @mouseover="mouseOver(num)" @click="onRate(num)">★</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed,ref,defineEmits } from 'vue';
let props = defineProps({
    value: Number,
    theme: {
        type: String,
        default: 'orange'
    }
})

let width = ref(props.value)

const mouseOut = () => {
    width.value = props.value
}
const mouseOver = (i) => {
    width.value = i
}

let emits = defineEmits(['update-rate'])

const themeObj = {
    'black': '#000',
    'white': '#fff',
    'red': '#f5222d',
    'orange': '#fa541c',
    'yellow': '#fadb14',
    'green': '#73d13d',
    'blue': '#40a9ff'
}
const fontstyle = computed(() => {
    return `color:${themeObj[props.theme]}`
})

const fontwidth = computed(() => `width:${width.value}em;`)

const onRate = (num) => {
    console.log(num)
    emits('update-rate',num)
}
</script>

<style scoped>
.rate {
    position:relative;
    font-size: 16px;
    line-height: 1;
}

span{
    display: inline-block;
    width: 1em;
    height: 1em;
}

.hollow{
    position: absolute;
    left: 0;
    top: 0;
    height: 1em;
    overflow: hidden;
}



</style>