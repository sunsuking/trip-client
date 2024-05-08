import type { AUthentication, Profile } from "@/types/user.type"
import client, { type BaseResponse } from "@/api/client"
import { useAuthenticationStore } from "@/stores/authentication"

export const userDataRequest = async () => {
  const { data: { isSuccess, message, data } } = await client.get<BaseResponse<AUthentication>>(`/user/me`)
  if (!isSuccess) throw new Error(message)
  const store = useAuthenticationStore();
  if (data.isLogin) {
    store.updateProfile(data.profile!!)
  }
  return data
}