import { ref } from 'vue' // 响应式 使共享状态依然会热更新  
// 单页应用 -> 组件 + 数据流管理
import { defineStore } from 'pinia'  // npm i pinia
// 定义一个仓库
export const useUserStore = defineStore('user', () => {
  const isLogin = ref(false)
  async function updateLogin() {

  }
  return {
    isLogin,
    updateLogin
  }
})
