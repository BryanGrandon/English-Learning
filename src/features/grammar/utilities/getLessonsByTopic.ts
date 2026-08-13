import { getCollection } from 'astro:content'
import type { GrammarLevel } from '../config'

type LessonsData = {
  id: string
  title: string
  order: number
}

type DataList = {
  topic: string
  lessons: LessonsData[]
}

export const getLessonsByTopic = async (level: GrammarLevel) => {
  const lessons = await getCollection('grammar')

  const lessonsLevel = lessons.filter((lesson) => lesson.data.level === level)
  const topics = [...new Set(lessonsLevel.map((lesson) => lesson.data.topic))]

  const data: DataList[] = []

  for (let i = 0; i < topics.length; i++) {
    data.push({
      topic: topics[i],
      lessons: lessonsLevel
        .filter((lesson) => lesson.data.topic === topics[i])
        .map((lesson) => ({
          id: lesson.id,
          title: lesson.data.title,
          order: lesson.data.order,
        })),
    })
  }
  console.log(data[0].lessons)
  return data
}
