import { GRAMMAR_LEVEL } from '@shared/utilities/constants/courses'
import type { InferEntrySchema, RenderedContent } from 'astro:content'

export type grammarLevel = keyof typeof GRAMMAR_LEVEL

export type GrammarLesson = {
  id: string
  body?: string
  collection: 'grammar'
  data: InferEntrySchema<'grammar'>
  rendered?: RenderedContent
  filePath?: string
}
