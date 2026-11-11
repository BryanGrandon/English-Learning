import { useMemo } from 'react'
import useCoursesWithProgress from './useCoursesWithProgress'
import { COURSES } from '@config/courses/courses'
import { COURSE_STATUS, STATUS_ACTIONS } from '@shared/constants/course-status'

const useCourseCollection = () => {
  const { courseProgress } = useCoursesWithProgress()

  type GetSortBy = {
    total: number
    lessons: number
  }

  const getSortBy = ({ total, lessons }: GetSortBy) => {
    if (lessons === 0) return COURSE_STATUS.NOT_STARTED
    else if (lessons > 0 && lessons < total) return COURSE_STATUS.IN_PROGRESS
    else return COURSE_STATUS.COMPLETED
  }

  const courses = useMemo(() => {
    return COURSES.map((el) => {
      const completedLessons = courseProgress[el.level].completed_lessons
      const totalLessons = courseProgress[el.level].total_lessons
      const sortBy = getSortBy({ total: totalLessons, lessons: completedLessons })
      return {
        ...el,
        completedLessons,
        totalLessons,
        percentage: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
        sortBy,
        statusAction: STATUS_ACTIONS[sortBy],
      }
    })
  }, [courseProgress])

  return { courses }
}

export default useCourseCollection
