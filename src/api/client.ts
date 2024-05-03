import { useAuthenticationStore } from "@/stores/authentication";
import axios from "axios";
import { resolve } from "url";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URI,
})

const REFRESH_URI = `${process.env.VUE_APP_API_URI}/auth/refresh`

instance.interceptors.request.use((config) => {
  const authentication = useAuthenticationStore()
  if (!authentication.isLogin) throw Error("인증 처리가 올바르지 않습니다. 다시 확인해주세요.")
  config.headers["Authorization"] = `Bearer ${authentication.accessToken}`
  return config;
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  const { config, response: { status } } = error;
  const originalRequest = config;
  const authentication = useAuthenticationStore()

  // 인증 에러가 아닌 경우 바로 에러 처리
  if (status !== 401) return Promise.reject(error)

  // Refresh Token 재발급 중 에러가 발생한 경우
  if (config.url === REFRESH_URI){
    authentication.clearAuthentication()
    throw new Error("인증 기간이 만료되었습니다. 다시 로그인 해주세요.")
  } 

  try {
    const { data: { accessToken: newAccessToken } } = await axios.post<{
      accessToken: string
    }>(REFRESH_URI)

    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
    authentication.setAccessToken(newAccessToken)
    return axios(originalRequest)
  } catch (error) {
    authentication.clearAuthentication()
    throw new Error("인증 과정에서 에러가 발생하였습니다.")
  }

  return Promise.reject(error)
})

export default instance;