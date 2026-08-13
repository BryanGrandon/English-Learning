export const LEVEL = {
  A1: 'A1',
  A2: 'A2',
} as const

export type GrammarLevel = keyof typeof LEVEL

export const GRAMMAR_A1 = [
  { id: 1, topic: 'nouns', title: 'Nouns' },
  { id: 2, topic: 'articles', title: 'Articles' },
  { id: 3, topic: 'pronouns', title: 'Pronouns' },
  { id: 4, topic: 'adjectives', title: 'Adjectives' },
  { id: 5, topic: 'verbs', title: 'Verbs' },
  { id: 6, topic: 'sentence-structure', title: 'Sentence Structure' },
  { id: 7, topic: 'present-tenses', title: 'Present Tenses' },
  { id: 8, topic: 'prepositions', title: 'Prepositions' },
  { id: 9, topic: 'numbers-dates-time', title: 'Numbers, Dates & Time' },
]
