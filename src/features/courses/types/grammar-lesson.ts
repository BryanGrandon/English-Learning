import { ENGLISH_LEVEL } from '@shared/utilities/constants/english-level'
import type { InferEntrySchema, RenderedContent } from 'astro:content'

export type grammarLevel = keyof typeof ENGLISH_LEVEL

export type GrammarLesson = {
  id: string
  body?: string
  collection: 'grammar'
  data: InferEntrySchema<'grammar'>
  rendered?: RenderedContent
  filePath?: string
}
