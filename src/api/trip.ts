import type { TripCategory } from "@/types/trip.type"
import type { BaseResponse } from "./client"
import client from "./client"

export const categoryRequest = async (): Promise<TripCategory[]> => {
  const { data: { isSuccess, message, data } } = await client.get<BaseResponse<TripCategory[]>>(`/tour/category`)
  if (!isSuccess) throw new Error(message)
  return data;
}