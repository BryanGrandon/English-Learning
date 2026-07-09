import type { LucideIcon } from 'lucide-react'

type Props = {
  icon: LucideIcon
  children: React.ReactNode
  title: string
  className?: string
}

const LessonCard = ({ title, icon, children, className = '' }: Props) => {
  const Icons = icon
  return (
    <section className={`lesson-block flex flex-col gap-4 p-4 bg-black/10 border rounded-xl ${className}`}>
      <header className={`flex gap-4 items-center`}>
        <Icons size={22} />
        <h3 className={`capitalize w-full text-xl`}>{title}</h3>
      </header>

      <section className='grid gap-4'>{children}</section>
    </section>
  )
}

export default LessonCard
