export interface BoardListProps {
  title: string
}

export interface INotice {
  noticeId: number
  title: string
  content: string
  createdAt: Date
}

export interface IReview {
  id: number
  author: string
  photoUrls: string[]
  location: string
  content: string
}

export interface ReviewCardProps {
  review: IReview
}

export interface IReviewComment {
  author: string
  content: string
  createdAt: string
}
