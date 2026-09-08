import { useGrammar } from '../hooks/useGrammar'
import type { GrammarLesson, grammarLevel } from '../types/grammar-lesson'
import { cn } from '@shared/lib/cn'

type LessonsProps = {
  data: GrammarLesson[]
  level: grammarLevel
}

const Lessons = ({ data, level }: LessonsProps) => {
  const { getLessonsByTopic, getConfigByLevel } = useGrammar({ data, level })

  const color = `var(--color-level-${level.toLowerCase()})`

  const arr = getConfigByLevel()

  return (
    <article className={cn('grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4')}>
      {arr?.map((lesson) => (
        <section key={lesson.id} className={cn('p-4 space-y-2 border border-muted rounded-lg shadow shadow-muted')}>
          <header>
            <section className='text-xl flex justify-between gap-4'>
              <h3 className='text-xl'>
                <span className='font-body'>{lesson.id}. </span>
                {lesson.title}
              </h3>

              <lesson.icon style={{ color }} />
            </section>

            <p className={cn('text-[0.8rem] px-5 font-display')} style={{ color }}>
              {lesson.translation}
            </p>
          </header>
          <div className='space-y-2'>
            {getLessonsByTopic(lesson.topic).map((el) => (
              <a
                key={el.order}
                href={'/lessons/grammar/' + el.id}
                className={cn(
                  'block border border-muted py-1 px-3 rounded hover:scale-102 active:scale-98',
                  'transition-colors duration-200',
                  'hover:border-(--level-color)',
                  'hover:bg-(--level-color)',
                )}
                style={
                  {
                    '--level-color': color,
                  } as React.CSSProperties
                }
              >
                {el.title}
              </a>
            ))}
          </div>
        </section>
      ))}
    </article>
  )
}

export default Lessons
