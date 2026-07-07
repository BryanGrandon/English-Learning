import { CALLOUT_CONFIG, type CalloutVariant } from './callout.config'

type CalloutProps = {
  type: CalloutVariant
  children: React.ReactNode
}

const Callout = ({ type, children }: CalloutProps) => {
  const config = CALLOUT_CONFIG[type]
  const Icon = config.icon

  return (
    <section
      className='grid gap-4 p-4 border rounded-lg'
      style={{ borderColor: config.color, backgroundColor: config.background }}
    >
      <header className='flex items-center gap-4 pb-2 border-b' style={{ borderColor: config.color }}>
        <div className='flex items-center justify-center size-8  rounded-lg ' style={{ backgroundColor: config.color }}>
          <Icon size={18} color='white' />
        </div>
        <h3 className='font-bold capitalize text-xl'>{type}</h3>
      </header>
      <section className='grid gap-4 grid-cols-[2rem_1fr]'>
        <section className='max-w-none col-start-2'>{children}</section>
      </section>
    </section>
  )
}

export default Callout
