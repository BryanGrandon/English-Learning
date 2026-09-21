import { COURSES } from '@shared/utilities/config/courses'
import { URLS_NAVBAR } from '@shared/utilities/config/url'

const items: NavbarUrlSimple[] = COURSES.map((el) => {
  return {
    url: el.data.url,
    title: `${el.data.title}-${el.data.level}`,
  }
})

const NAVBAR_CONFIG = {
  COURSES: {
    title: 'Courses',
    items: items,
  },
  GRAMMAR: {
    items: items,
    title: 'Grammar',
  },
  VOCABULARY: {
    url: URLS_NAVBAR.VOCABULARY,
    title: 'Vocabulary',
  },
  ABOUT: {
    url: URLS_NAVBAR.ABOUT,
    title: 'About',
  },
}

// Create an identifier to highlight the title if it's on that page?

type NavbarUrlSimple = {
  title: string
  url: string
}

type NavbarUrl = {
  title: string
  url?: string | undefined
  items?: NavbarUrlSimple[] | undefined
}

type Navbar = {
  order: number
  data: NavbarUrl
}

const NAVBAR: Navbar[] = [
  { order: 1, data: NAVBAR_CONFIG.COURSES },
  { order: 2, data: NAVBAR_CONFIG.VOCABULARY },
  { order: 4, data: NAVBAR_CONFIG.GRAMMAR },
  { order: 3, data: NAVBAR_CONFIG.ABOUT },
]

export { NAVBAR }
