import { GRAMMAR_CONFIG, type GrammarVariant } from './grammar.config'

type GrammarProps = {
  variant: GrammarVariant
  title: string
  description?: string
  children: React.ReactNode
}

const Grammar = ({ variant, title, description, children }: GrammarProps) => {
  const config = GRAMMAR_CONFIG[variant]
  const Icon = config.icon

  return (
    <section
      className='p-4 border rounded-lg'
      style={{ borderColor: config.color, backgroundColor: config.background }}
    >
      <header className='flex items-center gap-4 mb-4 border-b' style={{ borderColor: config.color }}>
        <section
          className='flex items-center justify-center w-12 h-12 rounded-lg'
          style={{ backgroundColor: config.color }}
        >
          <Icon size={24} />
        </section>
        <section>
          <sub className='font-bold uppercase text-[10px]' style={{ color: config.color }}>
            {variant}
          </sub>
          <p className='text-lg font-semibold'>{title}</p>
          {description && <p className='text-sm text-gray-400 '>{description}</p>}
        </section>
      </header>
      <section className='prose'>{children}</section>
    </section>
  )
}

export default Grammar
