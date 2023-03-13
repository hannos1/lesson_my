<script setup lang="ts">
import {computed} from 'vue'
import {useProductsStore} from './store/product'
import Cart from './components/Cart.vue'
import ProductsList from './components/ProductsList.vue'

// const productStore = useProductsStore()
// const all = computed(() => productStore.state.all)
// productStore.loadAllProducts();
// setTimeout(() => { 
//   console.log(all,'///')
// },2000)
</script>

<template>
<!-- <div>{{all.length}}</div> -->
<div>
<h1>商品列表</h1>
<products-list />
<hr />
<h1>购物清单</h1>
<cart />
</div>
</template>

<style scoped>

</style>
