import { type CourseStatus, COURSE_STATUS } from '@shared/constants/course-status'
import type { EnglishLevel } from '@shared/constants/english-level'
import { useState } from 'react'

type CourseStatusMap = Record<EnglishLevel, CourseStatus>

const INITIAL_STATUS: CourseStatusMap = {
  A1: COURSE_STATUS.NOT_STARTED,
  A2: COURSE_STATUS.NOT_STARTED,
  B1: COURSE_STATUS.NOT_STARTED,
  B2: COURSE_STATUS.NOT_STARTED,
  C1: COURSE_STATUS.NOT_STARTED,
  C2: COURSE_STATUS.NOT_STARTED,
}

const useCourseStatus = () => {
  const [status, setStatus] = useState<CourseStatusMap>(INITIAL_STATUS)

  const updateCourseStatus = (course: EnglishLevel, newStatus: CourseStatus) => {
    setStatus((prev) => ({
      ...prev,
      [course]: newStatus,
    }))
  }

  const getCourseStatus = (course: EnglishLevel) => status[course]

  return {
    status,
    updateCourseStatus,
    getCourseStatus,
  }
}

export default useCourseStatus
