import { createLessonTheme } from '@shared/utilities/config/lesson-theme'
import { Scale, GitCompareArrows, CircleX } from 'lucide-react'

const GRAMMAR_CONFIG = {
  rule: createLessonTheme({ icon: Scale, color: '#8b5cf6' }),
  comparison: createLessonTheme({ icon: GitCompareArrows, color: '#06b6d4' }),
  commonMistake: createLessonTheme({ icon: CircleX, color: '#f97316' }),
} as const

type GrammarVariant = keyof typeof GRAMMAR_CONFIG

export { GRAMMAR_CONFIG, type GrammarVariant }
