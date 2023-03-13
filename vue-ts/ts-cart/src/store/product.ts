import {reactive} from 'vue'
import {defineStore} from 'pinia'
import {getProducts, IProduct} from '../service/shop'

// 大项目  数据管理  
export const useProductsStore = defineStore('products',
// {
//     state:() => {
//         return {
//             all:[] as IProduct[]
//         }
//     },
//     getters:{},
//     actions:{
//         async loadALLproduct(){
//             const ret = await getProducts()
//             this.all = ret
//         }
//     }

// }
    () => {
        let state = reactive({
            all:[] as IProduct[]
        })
        const loadAllProducts = async () => {
            const ret = await getProducts() as IProduct[]
            state.all = ret
        }
        const decrementProduct = async (product:IProduct) => {
            const curProduct = state.all.find(item => item.id === product.id)
            if(curProduct){
                curProduct.inventory--
            }
        }
        return {
            state,
            loadAllProducts,
            decrementProduct
        }
    }
)