import { ChevronDown } from 'lucide-react'
import { useGrammarEngine } from '../hooks/useGrammarEngine'
import type { GrammarLesson } from '../utilities/types/grammar-lesson'
import type { GrammarLevel } from '../utilities/constants/level'
import { GRAMMAR_A1 } from '../utilities/constants/grammar-level'

type AsideProps = {
  level: GrammarLevel
  lessonId: string
  data: GrammarLesson[]
}

const Aside = ({ level, lessonId, data }: AsideProps) => {
  const { getLessonsByTopic } = useGrammarEngine({ data, grammarLevel: level })

  return (
    <aside className='lesson-aside p-2 '>
      <article className='border border-gray-500 p-4 rounded-lg flex flex-col gap-2'>
        <div className=''>
          <h2 className='font-display text-2xl'>Grammar</h2>
          <p className='pl-4 text-text-secondary font-display'>Level {level}</p>
        </div>
        <hr className='text-gray-500' />
        <article>
          <section className='flex flex-col gap-3 p-2'>
            {GRAMMAR_A1.map((lesson) => (
              <details className='group flex flex-col gap-2' key={lesson.id}>
                <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                  <span>{lesson.title}</span>
                  <ChevronDown size={20} className='transition-transform duration-200 group-open:rotate-180' />
                </summary>

                <section className='pl-2 py-2 flex flex-col gap-2 '>
                  {getLessonsByTopic(lesson.topic).map((el) => (
                    <a
                      key={el.order}
                      href={'/lessons/grammar/' + el.id}
                      className='block border border-gray-500 py-1 px-3 rounded-lg'
                    >
                      {el.title}
                    </a>
                  ))}
                </section>
              </details>
            ))}
          </section>
        </article>
      </article>
    </aside>
  )
}

export default Aside
