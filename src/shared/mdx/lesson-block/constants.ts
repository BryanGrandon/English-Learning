import { AlertTriangle, Blocks, BookOpen, CircleX, Lightbulb, MapPin, Sparkles } from 'lucide-react'

const LESSON_BLOCK_VARIANTS = {
  position: {
    title: 'Position',
    icon: MapPin,
  },

  structure: {
    title: 'Structure',
    icon: Blocks,
  },

  usage: {
    title: 'Usage',
    icon: BookOpen,
  },

  example: {
    title: 'Example',
    icon: Lightbulb,
  },

  important: {
    title: 'Important',
    icon: AlertTriangle,
  },

  tip: {
    title: 'Tip',
    icon: Sparkles,
  },

  mistake: {
    title: 'Common Mistake',
    icon: CircleX,
  },
} as const

type LessonBlockVariant = keyof typeof LESSON_BLOCK_VARIANTS

export { LESSON_BLOCK_VARIANTS }
export type { LessonBlockVariant }
