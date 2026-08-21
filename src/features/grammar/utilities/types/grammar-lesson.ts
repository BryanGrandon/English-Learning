export type GrammarLesson = {
  id: string
  body?: string
  collection: 'grammar'
  data: {
    title: string
    translation: string
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
    topic: string
    order: number
  }
}
