import CourseCard from '@shared/components/ui/CourseCard'
import useCourseCollection from '@shared/hooks/useCourseCollection'
import { homeCourseFilter } from '../utils/home-course-filter'

const HomeCourses = () => {
  const { courses } = useCourseCollection()
  const cursesHome = homeCourseFilter(courses)
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {cursesHome.map((course) => (
        <CourseCard {...course} key={course.level} />
      ))}
    </section>
  )
}

export default HomeCourses
