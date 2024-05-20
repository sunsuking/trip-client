import type { Profile } from '@/types/user.type'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthenticationStore = defineStore('authentication', () => {
  const accessToken = ref<string | undefined>(undefined)
  const profile = ref<Profile | undefined>(undefined)

  const isLogin = computed(
    () => accessToken.value !== undefined && accessToken.value.length > 0 && profile
  )

  const authUserId = computed(() => {
    return profile.value?.id || 0
  })

  const setAccessToken = (newAccessToken: string) => {
    accessToken.value = newAccessToken
  }

  const clearAuthentication = () => {
    accessToken.value = undefined
  }

  const updateProfile = (newProfile: Profile) => {
    profile.value = newProfile
  }

  return { accessToken, profile, authUserId, isLogin, clearAuthentication, setAccessToken, updateProfile }
}, { 
  persist: {
    storage: sessionStorage,
    key: 'authentication',
    paths: ['accessToken', 'profile']
  }
 })
