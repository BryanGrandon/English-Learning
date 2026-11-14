import type { EnglishLevel } from '@shared/constants/english-level'
import useCourseCollection from '@shared/hooks/useCourseCollection'

const YourProgress = ({ level }: { level: EnglishLevel }) => {
  const { courses } = useCourseCollection()
  const course = courses.find((el) => el.level === level)

  if (!course) return null

  const { completedLessons, totalLessons, title, percentage } = course

  const radius = 34
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <article className='flex gap-4 items-center bg-surface px-4 py-3 rounded-lg shadow '>
      <div className='relative size-25 shrink-0'>
        <svg
          className='size-full -rotate-90'
          viewBox='0 0 80 80'
          role='progressbar'
          aria-label={`${title} progress`}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <circle
            cx='40'
            cy='40'
            r={radius}
            fill='none'
            stroke='currentColor'
            strokeWidth='7'
            className='text-accent/10'
          />

          <circle
            cx='40'
            cy='40'
            r={radius}
            fill='none'
            stroke='currentColor'
            strokeWidth='7'
            strokeLinecap='round'
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className='text-brand transition-all duration-700 ease-in-out'
          />
        </svg>

        <span className='absolute inset-0 flex items-center justify-center text-sm font-bold'>{percentage}%</span>
      </div>

      <section className='w-full grid gap-2'>
        <h3 className='text-xl'>{title}</h3>
        <div className='flex items-center justify-between gap-3'>
          <div className='flex items-center gap-2 text-sm'>
            <span className='font-semibold tabular-nums'>
              {completedLessons}/{totalLessons}
            </span>
            <span className='text-muted'>Lessons completed</span>
          </div>

          <span className='text-sm font-bold tabular-nums text-brand'>{percentage}%</span>
        </div>

        <div
          className='h-2.5 w-full overflow-hidden rounded-full bg-accent/10'
          role='progressbar'
          aria-label={`${title} progress`}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className='h-full rounded-full bg-brand transition-[width] duration-700 ease-in-out'
            style={{ width: `${percentage}%` }}
          />
        </div>
      </section>
    </article>
  )
}

export default YourProgress
