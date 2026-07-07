import type { VocabularyWord } from './Vocabulary'
import { VOCABULARY_CONFIG } from './vocabulary.config'

const VocabularyItem = ({ value, word, pronunciation, badge }: VocabularyWord) => {
  const { color, background } = VOCABULARY_CONFIG
  return (
    <article
      style={{ borderColor: color, backgroundColor: background }}
      className='group flex items-center gap-2 rounded-lg border p-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg'
    >
      <section
        style={{ backgroundColor: color }}
        className='flex size-10 shrink-0 items-center justify-center rounded-lg text-lg font-bold text-white '
      >
        {value}
      </section>

      <section className='min-w-0 flex-1'>
        <div className='flex items-center justify-between gap-2'>
          <h3 className='text-lg font-semibold capitalize font-raleway '>{word}</h3>

          {badge && (
            <span
              style={{ border: `1px solid ${color}`, backgroundColor: background }}
              className='rounded px-3 py-1 text-xs font-medium font-raleway'
            >
              {badge}
            </span>
          )}
        </div>

        {pronunciation && <p className=' font-mono text-sm dark:text-slate-400'>{pronunciation}</p>}
      </section>
    </article>
  )
}

export default VocabularyItem
