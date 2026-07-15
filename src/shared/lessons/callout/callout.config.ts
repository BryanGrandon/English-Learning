import { createLessonTheme } from '@shared/utilities/config/lesson-theme'

const CALLOUT_CONFIG = {
  example: {
    ...createLessonTheme({ variant: 'example' }),
  },
  example_sentences: {
    ...createLessonTheme({ variant: 'example_sentences' }),
  },
  note: {
    ...createLessonTheme({ variant: 'note' }),
  },
  tip: {
    ...createLessonTheme({ variant: 'tip' }),
  },
  remember: {
    ...createLessonTheme({ variant: 'remember' }),
  },
  warning: {
    ...createLessonTheme({ variant: 'warning' }),
  },
  important: {
    ...createLessonTheme({ variant: 'important' }),
  },
} as const

type CalloutVariant = keyof typeof CALLOUT_CONFIG

export { CALLOUT_CONFIG, type CalloutVariant }
