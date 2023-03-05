<template>
    <div>
        <!-- recommend -->
        <!-- <router-view/> -->
        <div class="recommend">
            <Banners v-if="banners.length" :banners="banners" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted,computed } from 'vue';
import {useRecommendStore} from '../../store/recommend'
import Banners from '@/components/Banners.vue'
const recommendStore = useRecommendStore()
// recommendStore.getBannersData()
const banners = computed(() => recommendStore.banners)
onMounted(async () => {
    await recommendStore.getBannersData()
    console.log(banners.value.length)
})

</script>

<style scoped>

</style>