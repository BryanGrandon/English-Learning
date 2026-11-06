import { useMemo } from 'react'

import { COURSES_CARD } from '@config/courses'
import { COURSE_STATUS } from '@shared/constants/course-status'
import useCourseStatus from '@shared/hooks/useCourseStatus'

const MAX_COURSES = 3

const STATUS_TEXT = {
  [COURSE_STATUS.NOT_STARTED]: 'Start learning',
  [COURSE_STATUS.IN_PROGRESS]: 'Continue learning',
  [COURSE_STATUS.COMPLETED]: 'Review course',
} as const

const useLearning = () => {
  const { status } = useCourseStatus()

  const viewCourses = useMemo(() => {
    const inProgress = COURSES_CARD.filter(({ key }) => status[key] === COURSE_STATUS.IN_PROGRESS)
    const notStarted = COURSES_CARD.filter(({ key }) => status[key] === COURSE_STATUS.NOT_STARTED)
    const completed = COURSES_CARD.filter(({ key }) => status[key] === COURSE_STATUS.COMPLETED)

    return [...inProgress, ...notStarted, ...completed].slice(0, MAX_COURSES).map((course) => ({
      ...course,
      status: status[course.key],
      statusText: STATUS_TEXT[status[course.key]],
    }))
  }, [status])

  return { viewCourses }
}

export default useLearning
