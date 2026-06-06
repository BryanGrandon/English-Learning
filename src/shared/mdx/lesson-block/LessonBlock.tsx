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
    <section className='rounded-xl border border-mdx-border bg-mdx-surface p-4'>
      <section className='flex items-center gap-2'>
        <Icon size={18} color='var(--mdx-level-color)' />
        <p className='font-semibold text-lg text-mdx-text-primary'>{title}</p>
      </section>

      <div className='my-3 border-t border-mdx-border'></div>

      {children}
    </section>
  )
}

export default LessonBlock
