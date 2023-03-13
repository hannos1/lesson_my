<template>
    <ul>
        <li v-for="item in cartStore.state.cartProducts" :key="item.id">
            {{item.title}} - ${{(item.price*item.quantity).toFixed(2)}} - {{item.quantity}}
            
        </li>
    </ul>
</template>

<script lang="ts" setup>
import {useProductsStore} from '../store/product'
import {onMounted} from 'vue'
import {useCartStore} from '../store/cart'

const productsStore = useProductsStore()
const cartStore = useCartStore()


onMounted(() => {
    productsStore.loadAllProducts()
})
</script>

<style scoped>

</style>