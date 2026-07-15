import { createLessonTheme } from '@shared/utilities/config/lesson-theme'

const GRAMMAR_CONFIG = {
  rule: {
    ...createLessonTheme({ variant: 'rule' }),
    label: 'Rule',
  },
  structure: {
    ...createLessonTheme({ variant: 'structure' }),
    label: 'Pattern',
  },
  comparison: {
    ...createLessonTheme({ variant: 'comparison' }),
    label: 'Key Differences',
  },
  common_mistake: {
    ...createLessonTheme({ variant: 'common_mistake' }),
    label: 'Avoid This Mistake',
  },
} as const

type GrammarVariant = keyof typeof GRAMMAR_CONFIG

export { GRAMMAR_CONFIG, type GrammarVariant }
