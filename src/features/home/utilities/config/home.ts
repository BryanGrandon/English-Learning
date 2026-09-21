import { BookOpen, Dumbbell, Clock3 } from 'lucide-react'

export const HERO = {
  title: 'Better English',
  highlight: 'Bigger Opportunities',
  description:
    'Improve your English skills structured lessons, practical exercises and engaging content. Learn at your own pace, from beginner to advanced.',
  img: {
    src: 'https://i.pinimg.com/originals/4f/ab/4a/4fab4a67d62a285125b6ae2fed52122b.jpg',
    alt: 'TEST',
  },
}

export const FEATURES = [
  {
    order: 1,
    id: 'courses',
    title: 'Structured Courses',
    description: 'From A1 to C2, with clear and organized content.',
    icon: BookOpen,
  },
  {
    order: 2,
    id: 'exercises',
    title: 'Interactive Exercises',
    description: 'Practice with quizzes, games and real-life examples.',
    icon: Dumbbell,
  },
  {
    order: 3,
    id: 'pace',
    title: 'Learn at Your Pace',
    description: 'Flexible and accessible anytime, anywhere.',
    icon: Clock3,
  },
]
