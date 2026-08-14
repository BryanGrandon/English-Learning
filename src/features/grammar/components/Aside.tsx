import { GRAMMAR_A1, type GrammarLevel } from '../config'
import { ChevronDown } from 'lucide-react'
import { useGrammarEngine } from '../hooks/useGrammarEngine'

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

type AsideProps = {
  level: GrammarLevel
  lessonId: string
  data: GrammarLesson[]
}

const Aside = ({ level, lessonId, data }: AsideProps) => {
  const { getLessonsByTopic } = useGrammarEngine(data, level)

  return (
    <aside className='lesson-aside p-4 test'>
      <h2>Grammar</h2>
      <article>
        <h3>Level {level}</h3>
        <section className='flex flex-col gap-3'>
          {GRAMMAR_A1.map((lesson) => (
            <details className='group' key={lesson.id}>
              <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                <span>{lesson.title}</span>

                <ChevronDown size={20} className='transition-transform duration-200 group-open:rotate-180' />
              </summary>

              <div className='px-4 py-2'>
                {getLessonsByTopic(lesson.topic).map((el) => (
                  <a key={el.order} href={el.id} className='block'>
                    {el.title}
                  </a>
                ))}
              </div>
            </details>
          ))}
        </section>
      </article>
    </aside>
  )
}

export default Aside
