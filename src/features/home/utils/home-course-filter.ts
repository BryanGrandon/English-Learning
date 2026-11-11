import { COURSE_STATUS } from '@shared/constants/course-status'
import type { CoursesType } from '@shared/types/courses.type'

export const homeCourseFilter = (courses: CoursesType[]) => {
  const MAX_COURSES = 3
  const inProgress = courses.filter(({ sortBy }) => sortBy === COURSE_STATUS.IN_PROGRESS)
  const notStarted = courses.filter(({ sortBy }) => sortBy === COURSE_STATUS.NOT_STARTED)
  const completed = courses.filter(({ sortBy }) => sortBy === COURSE_STATUS.COMPLETED)
  return [...inProgress, ...notStarted, ...completed].slice(0, MAX_COURSES)
}
