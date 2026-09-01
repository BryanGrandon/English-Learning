import { Sprout, BookOpen, TrendingUp, Rocket, Award, Brain } from 'lucide-react'

const LEVELS = {
  A1: {
    order: 1,
    title: 'Beginner',
    icon: Sprout,
    color: '#16A34A',
    url: '',
  },
  A2: {
    order: 2,
    title: 'Elementary',
    icon: BookOpen,
    color: '#65A30D',
    url: '',
  },
  B1: {
    order: 3,
    title: 'Intermediate',
    icon: TrendingUp,
    color: '#CA8A04',
    url: '',
  },
  B2: {
    order: 4,
    title: 'Upper Intermediate',
    icon: Rocket,
    color: '#EA580C',
    url: '',
  },
  C1: {
    order: 5,
    title: 'Advanced',
    icon: Award,
    color: '#DC2626',
    url: '',
  },
  C2: {
    order: 6,
    title: 'Proficient',
    icon: Brain,
    color: '#B91C1C',
    url: '',
  },
} as const

export { LEVELS }
