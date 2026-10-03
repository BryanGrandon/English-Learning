import { COURSES } from '@config/courses'
import { URLS_NAVBAR } from '@config/urls'

const items: NavbarUrlSimple[] = COURSES.map((el) => {
  return { url: el.url, title: `${el.title}-${el.key}` }
})

const NAVBAR_CONFIG = {
  COURSES: {
    title: 'Courses',
    items: items,
    order: 1,
  },
  VOCABULARY: {
    url: URLS_NAVBAR.VOCABULARY,
    title: 'Vocabulary',
    order: 2,
  },
  GRAMMAR: {
    items: items,
    title: 'Grammar',
    order: 3,
  },
  ABOUT: {
    url: URLS_NAVBAR.ABOUT,
    title: 'About',
    order: 4,
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

const NAVBAR: NavbarUrl[] = Object.values(NAVBAR_CONFIG).sort((a, b) => a.order - b.order)

export { NAVBAR }
