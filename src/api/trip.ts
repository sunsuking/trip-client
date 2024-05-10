import type { TripCategory, SearchTrip, SearchQuery } from "@/types/trip.type"
import type { BaseResponse } from "./client"
import client from "./client"
import axios from "axios"

export const categoryRequest = async (): Promise<TripCategory[]> => {
  const { data: { isSuccess, message, data } } = await client.get<BaseResponse<TripCategory[]>>(`/tour/category`)
  if (!isSuccess) throw new Error(message)
  return data;
}


export const searchTripRequest = async (query: SearchQuery): Promise<SearchTrip[]> => {
  const { data: { isSuccess, message, data } } = await axios.get<BaseResponse<SearchTrip[]>>(`/response/trips.json`)
  if (!isSuccess) throw new Error(message)
  return data;
}