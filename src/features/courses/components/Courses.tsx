import { LEVEL_TOPICS } from '@config/courses'
import CourseCard from '@shared/components/ui/CourseCard'
import useCourseCollection from '@shared/hooks/useCourseCollection'

const Courses = () => {
  const { courses } = useCourseCollection()

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
      {courses.map((course) => (
        <CourseCard {...course} key={course.level}>
          <ul className='grid grid-cols-2 gap-x-4 gap-y-2 border-t border-divider pt-4'>
            {LEVEL_TOPICS[course.level].map(({ key, title }) => (
              <li key={key} className='flex items-start gap-2 text-sm text-muted'>
                <span className='mt-1.5 size-1.5 shrink-0 rounded-full bg-brand' />
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </CourseCard>
      ))}
    </section>
  )
}

export default Courses
