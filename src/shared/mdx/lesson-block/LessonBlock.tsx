import { LESSON_BLOCK_VARIANTS } from './constants'
import type { LessonBlockVariant } from './constants'

type LessonBlockProps = {
  children: React.ReactNode
  variant: LessonBlockVariant
}

const LessonBlock = ({ children, variant }: LessonBlockProps) => {
  const config = LESSON_BLOCK_VARIANTS[variant]
  const Icon = config.icon
  const title = config.title
  return (
    <section className='rounded-xl border border-slate-200 bg-white p-4'>
      <section className='flex items-center gap-2'>
        <Icon size={18} />
        <h3 className='font-semibold text-slate-900'>{title}</h3>
      </section>

      <div className='my-4 border-t border-slate-100'></div>

      {children}
    </section>
  )
}

export default LessonBlock
