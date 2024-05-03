import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthenticationStore = defineStore('authentication', () => {
  const accessToken = ref<string | undefined>(undefined)
  const isLogin = computed(() => accessToken.value !== undefined && accessToken.value.length > 0) 
  const setAccessToken = (newAccessToken: string) => {
    accessToken.value = newAccessToken;
  }
  const clearAuthentication = () => {
    accessToken.value = undefined;
  }


  return { accessToken, isLogin, clearAuthentication, setAccessToken }
})
