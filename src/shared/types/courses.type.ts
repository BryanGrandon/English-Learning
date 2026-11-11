import type { CourseStatus } from '@shared/constants/course-status'
import type { EnglishLevel } from '@shared/constants/english-level'
import type { LucideIcon } from 'lucide-react'

export type CoursesType = {
  completedLessons: number
  totalLessons: number
  percentage: number
  sortBy: CourseStatus
  statusAction: string
  level: EnglishLevel
  title: string
  heading: string
  description: string
  icon: LucideIcon
  url: string
}
