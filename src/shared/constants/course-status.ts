export const COURSE_STATUS = {
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
} as const

export type CourseStatus = (typeof COURSE_STATUS)[keyof typeof COURSE_STATUS]

export const STATUS_ACTIONS = {
  [COURSE_STATUS.NOT_STARTED]: 'Start learning',
  [COURSE_STATUS.IN_PROGRESS]: 'Continue learning',
  [COURSE_STATUS.COMPLETED]: 'Review course',
}
