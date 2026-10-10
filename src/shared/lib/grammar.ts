import { getCollection } from 'astro:content'
import { LEVEL_TOPICS } from '@config/courses/index'
import type { EnglishLevel } from '@shared/utilities/constants/english-level'

export async function getGrammarLessons() {
  return getCollection('grammar')
}

export const getTopicsWithLessons = async (level: EnglishLevel) => {
  const grammarLessons = await getGrammarLessons()
  const topics = LEVEL_TOPICS[level]

  return topics.map((topic) => ({
    ...topic,
    lessons: topic.lessons.map((item) => {
      const lesson = grammarLessons.find((lesson) => lesson.data.key === item.key)

      if (!lesson) {
        throw new Error(`Lesson "${item.key}" not found in grammar collection.`)
      }

      return {
        ...item,
        title: lesson.data.title,
        translation: lesson.data.translation,
        href: `/courses/${level.toLowerCase()}/${lesson.id}`,
      }
    }),
  }))
}
