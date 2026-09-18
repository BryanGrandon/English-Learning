import { GRAMMAR_LEVEL } from '../constants/courses'

type UrlsCourses = Record<keyof typeof GRAMMAR_LEVEL, string>

const arrUrlsCourses = Object.entries(GRAMMAR_LEVEL).map(([key, value]) => [key, `/courses/${value.toLowerCase()}`])
export const URLS_COURSES = Object.fromEntries(arrUrlsCourses) as UrlsCourses

export const URLS_NAVBAR = {
  HOME: '/',
  VOCABULARY: '/vocabulary',
  ABOUT: '/',
}
