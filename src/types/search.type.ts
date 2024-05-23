import type { IScheduleSearch } from '@/types/schedule.type'
import type { IReview } from './board.type'

export interface ISearch {
  reviews: IReview[]
  notices: {
    noticeId: number
    title: string
    content: string
    createdAt: string
  }[]
  users: {
    id: number
    email: string
    profileImage?: string
    nickname: string
  }[]
  schedules: IScheduleSearch[]
}
