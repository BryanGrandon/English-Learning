// ----- Navbar ----- //

export const URLS_NAVBAR = {
  HOME: '/',
  VOCABULARY: '/vocabulary',
  ABOUT: '/',
}

// ---- Courses ----- //

const ENGLISH_LEVEL = {
  A1: 'A1',
  A2: 'A2',
  B1: 'B1',
  B2: 'B2',
  C1: 'C1',
  C2: 'C2',
} as const

type UrlsCourses = Record<keyof typeof ENGLISH_LEVEL, string>

const arrUrlsCourses = Object.entries(ENGLISH_LEVEL).map(([key, value]) => [key, `/courses/${value.toLowerCase()}`])
export const URLS_COURSES = Object.fromEntries(arrUrlsCourses) as UrlsCourses
