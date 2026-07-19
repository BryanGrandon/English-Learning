import { createLessonTheme } from '@shared/utilities/config/lesson-theme'

const CALLOUT_CONFIG = {
  example: {
    ...createLessonTheme({ variant: 'example' }),
    label: 'Example',
  },

  example_sentences: {
    ...createLessonTheme({ variant: 'example_sentences' }),
    label: 'Example Sentences',
  },

  note: {
    ...createLessonTheme({ variant: 'note' }),
    label: 'Note',
  },

  tip: {
    ...createLessonTheme({ variant: 'tip' }),
    label: 'Tip',
  },

  remember: {
    ...createLessonTheme({ variant: 'remember' }),
    label: 'Remember',
  },

  warning: {
    ...createLessonTheme({ variant: 'warning' }),
    label: 'Warning',
  },

  important: {
    ...createLessonTheme({ variant: 'important' }),
    label: 'Important',
  },
} as const

type CalloutVariant = keyof typeof CALLOUT_CONFIG

export { CALLOUT_CONFIG, type CalloutVariant }
