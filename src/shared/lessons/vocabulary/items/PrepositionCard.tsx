import { VOCABULARY_CONFIG } from '../vocabulary.config'

export type PrepositionCardProps = {
  term: string
  definition: string
  example: string
  pronunciation?: string
  badge?: string
}

const PrepositionCard = ({ term, definition, example, pronunciation, badge }: PrepositionCardProps) => {
  const { color, background } = VOCABULARY_CONFIG

  return (
    <article
      style={{
        borderColor: color,
        backgroundColor: background,
      }}
      className='group relative overflow-hidden rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900'
    >
      {/* Accent */}
      <div style={{ backgroundColor: color }} className='absolute left-0 top-0 h-full w-1' />

      <header className='flex items-start justify-between gap-4'>
        <div className='flex-1'>
          <div className='flex items-center gap-3'>
            <h3 style={{ color }} className='text-2xl font-bold tracking-tight'>
              {term}
            </h3>

            {badge && (
              <span
                style={{
                  color,
                  borderColor: color,
                  backgroundColor: background,
                }}
                className='rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide'
              >
                {badge}
              </span>
            )}
          </div>

          {pronunciation && (
            <p className='mt-1 font-mono text-sm text-slate-500 dark:text-slate-400'>{pronunciation}</p>
          )}
        </div>
      </header>

      <div className='mt-4 border-t border-slate-200 pt-4 dark:border-slate-700'>
        <p className='leading-7 text-slate-700 dark:text-slate-300'>{definition}</p>
      </div>
    </article>
  )
}

export default PrepositionCard
