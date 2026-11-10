import { ENGLISH_LEVEL } from '@shared/constants/english-level'

const BASE_PATH = '/'

export const NAV_ROUTES = {
  HOME: BASE_PATH,
  COURSES: `${BASE_PATH}courses`,
  GRAMMAR: `${BASE_PATH}grammar`,
  VOCABULARY: `${BASE_PATH}vocabulary`,
  PRACTICE: `${BASE_PATH}practice`,
} as const

export const NAVBAR_ROUTES = [
  { id: 'home', label: 'Home', href: NAV_ROUTES.HOME },
  { id: 'courses', label: 'Courses', href: NAV_ROUTES.COURSES },
  { id: 'grammar', label: 'Grammar', href: NAV_ROUTES.GRAMMAR },
  { id: 'vocabulary', label: 'Vocabulary', href: NAV_ROUTES.VOCABULARY },
  { id: 'practice', label: 'Practice', href: NAV_ROUTES.PRACTICE },
]

type UrlsCourses = Record<keyof typeof ENGLISH_LEVEL, string>

const arrUrlsCourses = Object.entries(ENGLISH_LEVEL).map(([key, value]) => [key, `/courses/${value.toLowerCase()}`])
export const URLS_COURSES = Object.fromEntries(arrUrlsCourses) as UrlsCourses
