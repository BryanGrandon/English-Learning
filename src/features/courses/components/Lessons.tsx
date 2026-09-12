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
  const url = '/courses/grammar/'

  return (
    <article className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4'>
      {arr?.map((topic) => (
        <section key={topic.id} className='rounded-lg border border-muted p-4 shadow shadow-muted'>
          <header className='mb-4 flex items-start justify-between gap-4'>
            <div>
              <h3 className='text-xl font-display'>{topic.title}</h3>

              <p className='text-sm font-body' style={{ color }}>
                {topic.translation}
              </p>
            </div>

            <topic.icon size={32} style={{ color }} />
          </header>

          <nav className='space-y-2'>
            {getLessonsByTopic(topic.topic).map((lesson) => (
              <a
                key={lesson.id}
                href={lesson.id}
                className={cn(
                  'list-disc list-inside list-item',
                  'transition-all duration-200',
                  'hover:scale-[1.02]',
                  'active:scale-[0.98]',
                )}
                style={
                  {
                    '--level-color': color,
                  } as React.CSSProperties
                }
              >
                {lesson.title}
              </a>
            ))}
          </nav>
        </section>
      ))}
    </article>
  )
}

export default Lessons
