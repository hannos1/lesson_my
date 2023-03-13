<template>
    <ul>
        <li v-for="item in productsStore.state.all" :key="item.id">
            {{item.title}} - ${{item.price}}: {{item.inventory}}
            <button :disabled="!item.inventory" @click="cartStore.addProductToCart(item)">
                添加到购物车
            </button>
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