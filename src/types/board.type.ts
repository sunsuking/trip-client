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
  content: string
  tourId: number
  createdAt: string
  updatedAt: string
  likeCount: number
  imgUrls: string[]
  userId: number
  nickname: string
  profileImage: string
}

export interface ReviewForm {
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

export interface ReviewCommentForm {
  reviewId: number
  userId: number
  content: string
}

export interface ReviewCommentDetail {
  commentId: number
  userId: number
  nickname: string
  content: string
  createdAt: string
  profileImage: string
}

export interface SearchCondition {
  key: string
  keyword: string
}
