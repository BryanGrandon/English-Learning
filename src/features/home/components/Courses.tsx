import { ArrowRight } from 'lucide-react'
import useLearning from '../hooks/useLearning'
import { cn } from '@shared/lib/cn'

const Courses = () => {
  const { viewCourses } = useLearning()
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {viewCourses.map(({ key, title, description, buttonText }) => (
        <section key={key} className='flex flex-col gap-4 border border-divider rounded-lg p-4 bg-accent/20 shadow'>
          <div className='flex items-center gap-4'>
            <span className='flex size-15 shrink-0 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white'>
              {key}
            </span>
            <div>
              <h3 className='font-bold'>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <p>Bar Progress</p>
            <button
              className={cn(
                'group inline-flex items-center gap-3 rounded-full border border-accent px-5 py-2',
                'shadow shadow-brand/20 font-display font-semibold tracking-wide text-accent',
                'transition-all  duration-300 hover:bg-accent hover:text-white',
                'active:scale-95 cursor-pointer',
              )}
            >
              {buttonText}
              <ArrowRight size={20} className='transition-transform duration-300 group-hover:translate-x-1' />
            </button>
          </div>
        </section>
      ))}
    </section>
  )
}

export default Courses
