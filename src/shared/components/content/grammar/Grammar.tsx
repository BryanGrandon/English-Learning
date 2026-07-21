import { cn } from '@shared/lib/cn'
import { GRAMMAR_CONFIG, type GrammarVariant } from './grammar.config'

type GrammarProps = {
  type: GrammarVariant
  title: string
  description?: string
  highlight?: string
  children: React.ReactNode
  className?: string
}

const Grammar = ({ type, title, description, children, highlight, className = '' }: GrammarProps) => {
  const { icon, color, background, label } = GRAMMAR_CONFIG[type]
  const Icon = icon

  return (
    <section
      className={cn('grid gap-2 p-4 border rounded-lg', className)}
      style={{ borderColor: color, backgroundColor: background }}
    >
      <header
        className='grid grid-cols-[auto_1fr] items-center gap-4 pb-2 border-b relative'
        style={{ borderColor: color }}
      >
        <div className='flex items-center justify-center size-13 rounded-lg' style={{ backgroundColor: color }}>
          <Icon size={26} color='white' />
        </div>
        <div className='grid gap-1'>
          <span className='font-display capitalize tracking-wider font-semibold text-xs'>{label}</span>
          <h3 className='text-xl font-semibold font-display tracking-wider'>{title}</h3>
          {description && <p className='text-sm text-color-secondary '>{description}</p>}
        </div>
      </header>
      <section className='grid gap-4 py-1'>
        {highlight && (
          <div className='flex flex-col gap-3'>
            <span className='font-raleway tracking-wider font-semibold '>{label}</span>

            <p
              className='w-fit rounded-lg px-4 py-2 ml-4 font-mono font-medium dark:bg-black/20 bg-white/70 border-2 '
              style={{ borderColor: color }}
            >
              {highlight}
            </p>
          </div>
        )}
        {children}
      </section>
    </section>
  )
}

export default Grammar
