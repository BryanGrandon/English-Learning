import { cn } from '@shared/lib/cn'
import Icon from '@shared/components/icons/Icon'
import type { IconName } from '@shared/components/icons/icon-variation'

type SectionCardProps = {
  title: string
  children: React.ReactNode
  iconName?: IconName
  className?: string
}

const SectionCard = ({ title, iconName, children, className = '' }: SectionCardProps) => {
  return (
    <section
      className={cn('lesson-block flex flex-col gap-4 p-4 bg-black/10 border rounded-xl border-gray-500', className)}
    >
      <header className='flex items-center gap-4 pb-2 border-b border-b-gray-500'>
        {iconName && <Icon name={iconName} size={18} />}
        <h3 className='capitalize w-full font-raleway text-xl'>{title}</h3>
      </header>
      <section className='grid gap-4'>{children}</section>
    </section>
  )
}

export default SectionCard
