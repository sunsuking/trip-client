import type { Profile } from "@/types/user.type"
import client, { type BaseResponse } from "@/api/client"
import { useAuthenticationStore } from "@/stores/authentication"

export const userDataRequest = async () => {
  const { data: { isSuccess, message, data } } = await client.get<BaseResponse<Profile>>(`/user/me`)
  if (!isSuccess) throw new Error(message)
  const store = useAuthenticationStore();
  store.updateProfile(data)
  return data
}