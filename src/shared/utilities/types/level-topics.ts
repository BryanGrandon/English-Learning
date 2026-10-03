import { type CourseLevel } from '@config/courses'
import type { LucideIcon } from 'lucide-react'

type TopicLesson = {
  order: number
  key: string
  title: string
}

export type LevelTopic = {
  order: number
  key: string
  title: string
  icon: LucideIcon
  lessons: TopicLesson[]
}

export type LevelTopics = {
  level: CourseLevel
  topics: LevelTopic[]
}
