import { GRAMMAR_LEVEL } from '@shared/utilities/constants/courses'

export type grammarLevel = keyof typeof GRAMMAR_LEVEL

export type GrammarLesson = {
  id: string
  body?: string
  collection: 'grammar'
  data: {
    title: string
    translation: string
    level: grammarLevel
    topic: string
    order: number
  }
}
