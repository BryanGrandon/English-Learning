import { createLessonTheme } from '@shared/utilities/config/lesson-theme'
import { FileText, NotebookPen, Lightbulb, Brain, TriangleAlert, Star } from 'lucide-react'

const CALLOUT_CONFIG = {
  example: createLessonTheme({ icon: FileText, color: '#3b82f6' }),
  example_sentences: createLessonTheme({ icon: FileText, color: '#3b82f6' }),
  note: createLessonTheme({ icon: NotebookPen, color: '#64748b' }),
  tip: createLessonTheme({ icon: Lightbulb, color: '#10b981' }),
  remember: createLessonTheme({ icon: Brain, color: '#f59e0b' }),
  warning: createLessonTheme({ icon: TriangleAlert, color: '#ef4444' }),
  important: createLessonTheme({ icon: Star, color: '#eab308' }),
} as const

type CalloutVariant = keyof typeof CALLOUT_CONFIG

export { CALLOUT_CONFIG, type CalloutVariant }
