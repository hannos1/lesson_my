<template>
    <div class="product-detail">
        <simple-header name="商品详情"></simple-header>
    </div>
</template>


<script setup>
import {onMounted, reactive} from 'vue'
import { useRoute } from 'vue-router'
import SimpleHeader from '@/components/SimpleHeader.vue'
import {getDetail} from '@/service/detail'

const route = useRoute(); // 拿到当前路由
const state = reactive({
    detail:{}
})

onMounted(async () => {
    // console.log(route) 
    const {id} = route.params
    // console.log(id)
    const {data} = await getDetail(id)
    state.detail = data
})
</script>

<style scoped>

</style>