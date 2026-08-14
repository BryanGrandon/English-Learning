import type { GrammarLevel } from '../utilities/constants/level'
import type { GrammarLesson } from '../utilities/types/grammar-lesson'

type UseGrammarEngine = {
  data: GrammarLesson[]
  grammarLevel: GrammarLevel
}

export const useGrammarEngine = ({ data, grammarLevel }: UseGrammarEngine) => {
  const level = data.filter((lesson) => lesson.data.level == grammarLevel)

  const getLessonsByTopic = (topic: string) => {
    const topics = level
      .filter((lesson) => lesson.data.topic.toLowerCase() === topic)
      .map((lesson) => ({ id: lesson.id, title: lesson.data.title, order: lesson.data.order }))
      .sort((a, b) => a.order - b.order)

    return topics
  }

  return { getLessonsByTopic }
}
