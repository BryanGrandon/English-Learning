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
