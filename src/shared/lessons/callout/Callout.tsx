import { CALLOUT_CONFIG, type CalloutVariant } from './callout.config'

type CalloutProps = {
  type: CalloutVariant
  children: React.ReactNode
  className?: string
}

const Callout = ({ type, children, className = '' }: CalloutProps) => {
  const config = CALLOUT_CONFIG[type]
  const Icon = config.icon

  return (
    <section
      className={`flex flex-col gap-4 p-4 border rounded-lg ${className}`}
      style={{ borderColor: config.color, backgroundColor: config.background }}
    >
      <header className='flex items-center gap-4 pb-2 border-b' style={{ borderColor: config.color }}>
        <div className='flex items-center justify-center size-8  rounded-lg ' style={{ backgroundColor: config.color }}>
          <Icon size={18} color='white' />
        </div>
        <h3 className='font-bold capitalize text-xl'>{type.split('_').join(' ')}</h3>
      </header>
      <section className='grid gap-4'>{children}</section>
    </section>
  )
}

export default Callout
