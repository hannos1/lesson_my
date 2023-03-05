import {ref} from 'vue'
import {defineStore} from 'pinia'
import { getBanners } from '@/service/recommend'



export const useRecommendStore = defineStore('recommend',() => {
    const banners = ref([])
    const getBannersData = async () => {
        const data = await getBanners()
        banners.value = data.banners
        // console.log(banners.value)
    }
    return {
        banners,
        getBannersData
    }
})