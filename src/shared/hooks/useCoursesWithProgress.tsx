import type { EnglishLevel } from '@shared/constants/english-level'
import { INITIAL_PROGRESS, type InitialProgress } from '@shared/constants/initial-progress'
import { useState } from 'react'

const useCoursesWithProgress = () => {
  const [courseProgress, setCourseProgress] = useState<InitialProgress>(INITIAL_PROGRESS)

  type UpdateProgressContent = {
    level: EnglishLevel
    last_topic: string
    last_lesson: string
  }

  const updatesProgressContent = ({ level, last_lesson, last_topic }: UpdateProgressContent) => {
    setCourseProgress((prev) => ({
      ...prev,
      [level]: {
        ...prev[level],
        last_lesson,
        last_topic,
      },
    }))
  }

  const updateProgressLessons = (level: EnglishLevel) => {
    setCourseProgress((prev) => {
      const data = prev[level]
      if (data.total_lessons === data.lessons_completed) return { ...prev }
      return {
        ...prev,
        [level]: {
          ...data,
          lessons_completed: data.lessons_completed + 1,
        },
      }
    })
  }

  const getCourseProgress = (level: EnglishLevel) => courseProgress[level]

  return { courseProgress, updatesProgressContent, updateProgressLessons, getCourseProgress }
}

export default useCoursesWithProgress
