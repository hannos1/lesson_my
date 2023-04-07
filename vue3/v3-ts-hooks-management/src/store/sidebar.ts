import { defineStore } from 'pinia';
import {ref,Ref} from 'vue';

export const useSidebarStore = defineStore('sidebar', () => {
	const collapse:Ref<boolean> = ref(false)
    const handleCollapse = () => {
        collapse.value = !collapse.value
    }
    return {
        collapse,
        handleCollapse
    }
});