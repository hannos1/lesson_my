import {reactive} from 'vue'
import {defineStore} from 'pinia'
import { IProduct } from '../service/shop';
import { useProductsStore } from './product';

export interface ICartProducts {
    id:number;
    title:string;
    price:number;
    quantity:number;
}

export const useCartStore = defineStore('cart',() => {
    const state = reactive({
        cartProducts:[] as ICartProducts[],
        checkoutStatus:null
    })
    // 没有定义的变量  删掉
    const addProductToCart = (product:IProduct) => {
        if(product.inventory < 1){
            return 
        }
        const cartItem = state.cartProducts.find(item => item.id === product.id)
        if(cartItem){
            // console.log('///',cartItem)
            cartItem.quantity++
        }else{
            state.cartProducts.push({
                id:product.id,
                quantity:1,
                title:product.title,
                price:product.price
            })
        }
        const productStore = useProductsStore()
        productStore.decrementProduct(product)
    }
    return {
        state,
        addProductToCart
    }
})