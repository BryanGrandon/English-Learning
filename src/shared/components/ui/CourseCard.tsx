import { type ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { CoursesType } from '@shared/types/courses.type'

type Props = CoursesType & {
  children?: ReactNode
}

const CourseCard = ({
  level,
  url = '',
  title,
  description,
  completedLessons,
  totalLessons,
  statusAction,
  percentage,
  children,
}: Props) => {
  return (
    <a
      href={url}
      className='group flex flex-col gap-6 rounded-xl border border-divider bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-md focus-visible:outline-2 focus-visible:outline-brand'
    >
      <section className='flex items-center gap-4'>
        <span className='flex size-15 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xl font-bold text-brand'>
          {level}
        </span>

        <div className='min-w-0 space-y-1'>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='text-sm leading-relaxed text-muted-foreground'>{description}</p>
        </div>
      </section>

      <section className='space-y-2'>
        <div className='flex items-center justify-between text-sm'>
          <span className='font-medium'>
            {completedLessons} / {totalLessons} Lessons
          </span>
          <span className='font-semibold text-brand'>{percentage}%</span>
        </div>

        <div
          className='h-2 w-full overflow-hidden rounded-full bg-accent/10'
          role='progressbar'
          aria-label={`${title} progress`}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className={`h-full rounded-full bg-brand transition-all duration-500`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </section>

      {children && <section>{children}</section>}

      <section className='flex items-center justify-between border-t border-divider pt-4'>
        <span className='text-sm font-sans capitalize text-muted-foreground group-hover:font-semibold tracking-wide'>
          {statusAction}
        </span>

        <ArrowUpRight
          size={20}
          className='translate-x-0.5 -translate-y-0.5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-brand group-hover:opacity-100 group-focus-visible:opacity-100'
        />
      </section>
    </a>
  )
}

export default CourseCard
