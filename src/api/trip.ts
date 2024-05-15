import type { ICity, SearchQuery, SearchTrip, TripCategory } from "@/types/trip.type"
import type { BaseResponse } from "./client"
import client from "./client"

export const categoryRequest = async (): Promise<TripCategory[]> => {
  const { data: { isSuccess, message, data } } = await client.get<BaseResponse<TripCategory[]>>(`/tour/category`)
  if (!isSuccess) throw new Error(message)
  return data;
}


export const searchTripRequest = async (query: SearchQuery): Promise<SearchTrip[]> => {
  const { data: { isSuccess, message, data } } = await client.get<BaseResponse<SearchTrip[]>>(`/tour/search`, {
    params: query
  })
  if (!isSuccess) throw new Error(message)
  return data;
}

export const cityRequest = async (cityId: number): Promise<ICity> => {
  const { data: { isSuccess, message, data } } = await client.get<BaseResponse<ICity>>(`/tour/city/${cityId}`)
  if (!isSuccess) throw new Error(message)
  return data;
}