import { LEVEL_TOPICS } from '@config/courses/levels/index'
import type { EnglishLevel } from '../../shared/constants/english-level'

interface CourseProgress {
  total_lessons: number
  completed_lessons: number
  last_topic: string
  last_lesson: string
}

export type InitialProgress = Record<EnglishLevel, CourseProgress>

const INITIAL_PROGRESS = Object.fromEntries(
  Object.entries(LEVEL_TOPICS).map(([level, topics]) => [
    level,
    {
      total_lessons: topics.length,
      completed_lessons: 0,
      last_topic: '',
      last_lesson: '',
    },
  ]),
) as InitialProgress

export { INITIAL_PROGRESS }
