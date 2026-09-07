import { expect } from 'vitest'
import { GRAMMAR_A1 } from '../config/grammar'
import type { GrammarLesson, grammarLevel } from '../types/grammar-lesson'

type UseGrammar = {
  data: GrammarLesson[]
  level: grammarLevel
}

export const useGrammar = ({ data, level }: UseGrammar) => {
  const lessons = data.filter((lesson) => lesson.data.level == level)

  const getLessonsByTopic = (topic: string) => {
    const topics = lessons
      .filter((lesson) => lesson.data.topic.toLowerCase() === topic)
      .map((lesson) => ({ id: lesson.id, title: lesson.data.title, order: lesson.data.order }))
      .sort((a, b) => a.order - b.order)

    return topics
  }

  const getConfigByLevel = () => {
    switch (level) {
      case 'A1':
        return GRAMMAR_A1
      default:
        return GRAMMAR_A1
    }
  }

  return { getLessonsByTopic, getConfigByLevel }
}
