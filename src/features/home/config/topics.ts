import { BookOpen, Headphones, Dumbbell, Landmark } from 'lucide-react'

import { NAV_ROUTES } from '@config/routes'

const HOME_TOPICS = [
  {
    key: 'grammar',
    title: 'Grammar',
    description: 'Learn English grammar rules and build a strong foundation for effective communication.',
    icon: Landmark,
    url: NAV_ROUTES.GRAMMAR,
  },
  {
    key: 'vocabulary',
    title: 'Vocabulary',
    description: 'Expand your vocabulary and discover new words and expressions for everyday conversations.',
    icon: BookOpen,
    url: NAV_ROUTES.VOCABULARY,
  },
  {
    key: 'listening',
    title: 'Listening',
    description: 'Improve your listening skills and develop a better understanding of spoken English.',
    icon: Headphones,
    url: NAV_ROUTES.PRACTICE,
  },
  {
    key: 'practices',
    title: 'Practice',
    description: 'Put your knowledge into practice with interactive exercises and activities.',
    icon: Dumbbell,
    url: NAV_ROUTES.PRACTICE,
  },
]

export { HOME_TOPICS }
