import { cn } from '@shared/lib/cn'
import { CALLOUT_CONFIG, type CalloutVariant } from './callout.config'

type CalloutProps = {
  type: CalloutVariant
  children: React.ReactNode
  className?: string
  title?: string
}

const Callout = ({ type, children, className = '', title }: CalloutProps) => {
  const { color, background, label, icon } = CALLOUT_CONFIG[type]
  const Icon = icon

  return (
    <section
      className={cn('flex flex-col gap-4 p-4 border rounded-lg', className)}
      style={{ borderColor: color, backgroundColor: background }}
    >
      <header className='flex items-center gap-4 pb-2 border-b' style={{ borderColor: color }}>
        <div className='flex items-center justify-center size-8  rounded-lg ' style={{ backgroundColor: color }}>
          <Icon size={18} color='white' />
        </div>
        <h3 className='font-bold capitalize text-xl'>{title ?? label}</h3>
      </header>
      <section className='grid gap-4'>{children}</section>
    </section>
  )
}

export default Callout
