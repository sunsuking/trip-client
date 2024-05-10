export interface MetricProps {
  count: number
  name: string
}

export interface TripSummaryProps {
  backgroundImage: string
  name: string
  description: string
  location: string
  rating: number
}

export interface PostingSummaryProps {
  backgroundImage: string
  name: string
  description: string
  createdAt: Date
  views: number
}

export interface TripCategory {
  contentId: number
  name: string
  korName: string
}