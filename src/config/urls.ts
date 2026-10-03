// ----- Navbar ----- //

import { ENGLISH_LEVEL } from '@shared/utilities/constants/english-level'

export const URLS_NAVBAR = {
  HOME: '/',
  VOCABULARY: '/vocabulary',
  ABOUT: '/',
}

// ---- Courses ----- //

type UrlsCourses = Record<keyof typeof ENGLISH_LEVEL, string>

const arrUrlsCourses = Object.entries(ENGLISH_LEVEL).map(([key, value]) => [key, `/courses/${value.toLowerCase()}`])
export const URLS_COURSES = Object.fromEntries(arrUrlsCourses) as UrlsCourses
