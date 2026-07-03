import { GRAMMAR_CONFIG, type GrammarVariant } from './grammar.config'

type GrammarProps = {
  type: GrammarVariant
  title: string
  description?: string
  children: React.ReactNode
}

const Grammar = ({ type, title, description, children }: GrammarProps) => {
  const { icon, color, background } = GRAMMAR_CONFIG[type]
  const Icon = icon

  return (
    <section className='grid gap-2 p-4 border rounded-lg' style={{ borderColor: color, backgroundColor: background }}>
      <header className='grid grid-cols-[auto_1fr] items-center gap-4 pb-2 border-b' style={{ borderColor: color }}>
        <div className='flex items-center justify-center size-13 rounded-lg' style={{ backgroundColor: color }}>
          <Icon size={26} color='white' />
        </div>
        <div>
          <span className='font-bold uppercase text-[10px]' style={{ color: color }}>
            {type}
          </span>
          <h3 className='text-xl font-semibold'>{title}</h3>
          {description && <p className='text-sm dark:text-gray-400 text-gray-700'>{description}</p>}
        </div>
      </header>
      <section className='grid gap-4 grid-cols-[3.25rem_1fr]'>
        <section className='prose dark:prose-invert max-w-none col-start-2'>{children}</section>
      </section>
    </section>
  )
}

export default Grammar
