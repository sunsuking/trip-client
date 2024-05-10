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
  reviewId: number
  authorId: string
  content: string
  location: string
  photoUrls: string[]
}

export interface ReviewDetail {
  reviewId: number
  title: string
  content: string
  authorName: string
  authorEmail: string
  tourId: number
  createdAt: string
  updatedAt: string
  likeCount: number
  imgUrls: string[]
}

export interface ReviewForm {
  title: string
  content: string
  tourId: number
  imgUrls: string[]
}

export interface ReviewCardProps {
  review: IReview
}

export interface IReviewComment {
  author: string
  content: string
  createdAt: string
}
