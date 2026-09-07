import { useGrammar } from '../../hooks/useGrammar'
import type { GrammarLesson, grammarLevel } from '../../types/grammar-lesson'
import { cn } from '@shared/lib/cn'
import './styles.css'

type LessonsProps = {
  data: GrammarLesson[]
  level: grammarLevel
  color: {
    dark: string
    light: string
  }
}

const Lessons = ({ data, level, color }: LessonsProps) => {
  const { getLessonsByTopic, getConfigByLevel } = useGrammar({ data, level })

  const arr = getConfigByLevel()

  return (
    <article
      className={cn('grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4')}
      style={
        {
          '--color-light': color.light,
          '--color-dark': color.dark,
        } as React.CSSProperties
      }
    >
      {arr?.map((lesson) => (
        <section
          key={lesson.id}
          className={cn('p-4 space-y-2 border border-muted rounded-lg shadow shadow-muted', 'course-card')}
        >
          <header className=''>
            <section className='text-xl flex justify-between gap-4'>
              <h3 className='text-xl'>
                <span className='font-body'>{lesson.id}. </span>
                {lesson.title}
              </h3>

              <lesson.icon className='icon' />
            </section>

            <p className={cn('text-[0.8rem] px-5 font-display', 'translation')}>{lesson.translation}</p>
          </header>
          <div className='space-y-2'>
            {getLessonsByTopic(lesson.topic).map((el) => (
              <a
                key={el.order}
                href={'/lessons/grammar/' + el.id}
                className={cn('block border border-muted py-1 px-3 rounded hover:scale-102 active:scale-98')}
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
