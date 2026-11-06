import { ArrowRight, ArrowUpRight } from 'lucide-react'
import useLearning from '../hooks/useLearning'
import Button from '@shared/components/ui/Button'

const Courses = () => {
  const { viewCourses } = useLearning()
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {viewCourses.map(({ key, title, description, statusText }) => (
        <a
          key={key}
          href={''}
          className='group flex flex-col gap-6 rounded-xl border border-divider bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-md focus-visible:outline-2 focus-visible:outline-brand'
        >
          <div className='flex items-center gap-4'>
            <span className='flex size-15 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xl font-bold text-brand'>
              {key}
            </span>

            <div className='min-w-0 space-y-1'>
              <h3 className='text-lg font-bold'>{title}</h3>
              <p className='text-sm leading-relaxed text-muted-foreground'>{description}</p>
            </div>
          </div>

          <div className='space-y-2'>
            <div className='flex items-center justify-between text-sm'>
              <span className='font-medium'>Your Progress</span>
              <span className='font-semibold text-brand'>0%</span>
            </div>

            <div
              className='h-2 w-full overflow-hidden rounded-full bg-accent/10'
              role='progressbar'
              aria-label={`${title} progress`}
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className='h-full w-0 rounded-full bg-brand transition-all duration-500' />
            </div>
          </div>

          <div className='flex items-center justify-between border-t border-divider pt-4'>
            <span className='text-sm text-muted-foreground group-hover:font-semibold tracking-wide'>{statusText}</span>

            <ArrowUpRight
              size={20}
              className='translate-x-0.5 -translate-y-0.5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-brand group-hover:opacity-100 group-focus-visible:opacity-100'
            />
          </div>
        </a>
      ))}
    </section>
  )
}

export default Courses
