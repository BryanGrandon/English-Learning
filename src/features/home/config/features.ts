import { BookOpen, Brain, Gamepad2, ChartNoAxesCombined, GraduationCap, BookmarkCheck } from 'lucide-react'

export const PLATFORM_FEATURES = [
  {
    title: 'Structured Learning',
    description: 'Follow a clear learning path organized by levels, topics and lessons, from beginner to advanced.',
    icon: GraduationCap,
  },
  {
    title: 'Interactive Lessons',
    description:
      'Learn grammar and vocabulary through structured lessons with practical examples and clear explanations.',
    icon: BookOpen,
  },
  {
    title: 'Practice & Quizzes',
    description: 'Test your knowledge with interactive exercises and quizzes designed to reinforce what you learn.',
    icon: Brain,
  },
  {
    title: 'Interactive Learning Games',
    description: 'Make learning more engaging with fun activities and mini-games that help you practice English.',
    icon: Gamepad2,
  },
  {
    title: 'Progress Tracking',
    description: 'Keep track of your completed lessons and see how far you have progressed in your learning journey.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Flexible Learning',
    description: 'Start new lessons, continue where you left off or revisit previous topics whenever you want.',
    icon: BookmarkCheck,
  },
]
