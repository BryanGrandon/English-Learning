export const COURSE_STATUS = {
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
} as const

export type CourseStatus = (typeof COURSE_STATUS)[keyof typeof COURSE_STATUS]
