import { cn } from '@shared/lib/cn'
import type { LucideIcon } from 'lucide-react'

type SectionCardProps = {
  title: string
  children: React.ReactNode
  icon?: LucideIcon
  className?: string
}

const SectionCard = ({ title, icon, children, className = '' }: SectionCardProps) => {
  const Icons = icon

  return (
    <section className={cn('lesson-block flex flex-col gap-4 p-4 bg-black/10 border rounded-xl', className)}>
      <header className='flex items-center gap-4 pb-2 border-b'>
        {Icons && <Icons size={18} color='white' />}
        <h3 className='capitalize w-full font-raleway text-xl'>{title}</h3>
      </header>
      <section className='grid gap-4'>{children}</section>
    </section>
  )
}

export default SectionCard
