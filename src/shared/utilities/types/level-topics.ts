import type { LucideIcon } from 'lucide-react'

export type TopicLessonConfig = {
  key: string
}

export type LevelTopicConfig = {
  order: number
  key: string
  title: string
  description: string
  icon: LucideIcon
  lessons: TopicLessonConfig[]
}

export type TopicLesson = TopicLessonConfig & {
  title: string
  translation: string
  href: string
}

export type LevelTopic = Omit<LevelTopicConfig, 'lessons'> & {
  lessons: TopicLesson[]
}
