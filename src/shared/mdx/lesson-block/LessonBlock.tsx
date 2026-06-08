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
    <section className='rounded-xl border border-mdx-border bg-mdx-surface-secondary p-4'>
      <section className='flex items-center gap-2'>
        <Icon size={18} color='var(--level-a1)' />
        <p className='font-semibold text-lg text-mdx-text-primary'>{title}</p>
      </section>

      <div className='my-3 border-t border-mdx-border'></div>
      <section className='text-mdx-text-secondary ml-4'>{children}</section>
    </section>
  )
}

export default LessonBlock
