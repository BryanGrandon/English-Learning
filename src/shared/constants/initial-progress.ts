import { LEVEL_TOPICS } from '@config/courses/index'
import type { EnglishLevel } from './english-level'

interface CourseProgress {
  total_lessons: number
  lessons_completed: number
  last_topic: string
  last_lesson: string
}

export type InitialProgress = Record<EnglishLevel, CourseProgress>

const INITIAL_PROGRESS = Object.fromEntries(
  Object.entries(LEVEL_TOPICS).map(([level, topics]) => [
    level,
    {
      total_lessons: topics.length,
      lessons_completed: 0,
      last_topic: '',
      last_lesson: '',
    },
  ]),
) as InitialProgress

export { INITIAL_PROGRESS }
