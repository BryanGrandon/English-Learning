import VocabularyItem from './VocabularyItem'
import { VOCABULARY_CONFIG } from './vocabulary.config'

export type VocabularyWord = {
  value: string | number
  word: string
  pronunciation?: string
  badge?: string
}

type VocabularyProps = {
  title: string
  description: string
  level?: string
  tip?: string
  words: VocabularyWord[]
}

const Vocabulary = ({ title, description, level = 'A1', tip, words }: VocabularyProps) => {
  const { color, background } = VOCABULARY_CONFIG
  const Icon = VOCABULARY_CONFIG.icon

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
          <section className='flex items-center justify-between'>
            <h3 className='text-xl font-bold'>{title}</h3>
            <span className='text-sm font-medium text-slate-500'>
              {level} • {words.length} words
            </span>
          </section>

          <p className='max-w-2xl dark:text-slate-400 text-slate-600'>{description}</p>
        </section>
      </header>

      <article className='p-6'>
        <section className='mb-6 flex items-center justify-between'>
          <p className='text-lg font-semibold'>Vocabulary</p>
          <span className='text-sm text-slate-400'>{words.length} items</span>
        </section>

        <div className='grid gap-4 md:grid-cols-2'>
          {words.map((word) => (
            <VocabularyItem key={`${word.value}-${word.word}`} {...word} />
          ))}
        </div>
      </article>
    </section>
  )
}

export default Vocabulary
