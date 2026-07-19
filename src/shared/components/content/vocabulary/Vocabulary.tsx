import { VOCABULARY_CONFIG } from './vocabulary.config'
import './vocabulary.css'

type VocabularyProps = {
  title: string
  description: string
  children: React.ReactNode
  level?: string
  words?: number
}

const Vocabulary = ({ title, description, level = 'A1', words, children }: VocabularyProps) => {
  const { color, background, icon } = VOCABULARY_CONFIG
  const Icon = icon

  return (
    <section className={`overflow-hidden rounded-lg border shadow-sm`} style={{ borderColor: color }}>
      <header
        className='flex items-center gap-4 border-b p-4'
        style={{ backgroundColor: background, borderColor: color }}
      >
        <div
          style={{ background: color }}
          className='flex size-13 shrink-0 items-center justify-center rounded-lg text-white shadow-md'
        >
          <Icon size={26} color='white' />
        </div>

        <section className='flex-1 grid gap-0.5'>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl font-bold'>{title}</h3>
            <span className='text-sm font-medium text-slate-500'>
              {level} • {words} words
            </span>
          </div>

          <p className='max-w-2xl dark:text-slate-400 text-slate-600'>{description}</p>
        </section>
      </header>

      <article className='p-6'>
        <section className='mb-6 flex items-center justify-between'>
          <p className='text-lg font-semibold'>Vocabulary</p>
          <span className='text-sm text-slate-400'>{words} items</span>
        </section>

        <section className={`grid gap-4 vocabulary`}>{children}</section>
      </article>
    </section>
  )
}

export default Vocabulary
