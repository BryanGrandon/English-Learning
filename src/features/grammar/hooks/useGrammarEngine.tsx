import type { GrammarLevel } from '../config'

export type GrammarLesson = {
  id: string
  body?: string
  collection: 'grammar'
  data: {
    title: string
    description: string
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
    topic: string
    order: number
  }
}

export const useGrammarEngine = (data: GrammarLesson[], grammarLevel: GrammarLevel) => {
  const level = data.filter((lesson) => lesson.data.level == grammarLevel)

  const getLessonsByTopic = (topic: string) => {
    const topics = level
      .filter((lesson) => lesson.data.topic.toLowerCase() === topic)
      .map((lesson) => ({ id: lesson.id.split('/').pop(), title: lesson.data.title, order: lesson.data.order }))
      .sort((a, b) => a.order - b.order)

    return topics
  }

  return { getLessonsByTopic }
}
