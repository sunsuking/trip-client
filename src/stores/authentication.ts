import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Profile } from '@/types/user.type'

export const useAuthenticationStore = defineStore('authentication', () => {
  const accessToken = ref<string | undefined>(undefined)
  const profile = ref<Profile | undefined>(undefined)

  const isLogin = computed(() => accessToken.value !== undefined && accessToken.value.length > 0) 

  const setAccessToken = (newAccessToken: string) => {
    accessToken.value = newAccessToken;
  }

  const clearAuthentication = () => {
    accessToken.value = undefined;
  }

  const updateProfile = (newProfile: Profile) => {
    profile.value = newProfile
  }

  return { accessToken, profile, isLogin, clearAuthentication, setAccessToken, updateProfile }
})
