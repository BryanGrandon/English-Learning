import { type CourseLevel } from '@config/courses'
import type { LucideIcon } from 'lucide-react'

export type LevelTopic = {
  order: number
  key: string
  title: string
  description: string
  icon: LucideIcon
  lessons: { key: string }[]
}

export type LevelTopics = {
  level: CourseLevel
  topics: LevelTopic[]
}
