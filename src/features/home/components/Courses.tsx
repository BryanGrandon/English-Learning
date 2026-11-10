import useLearning from '../hooks/useLearning'
import CourseCard from '@shared/components/ui/CourseCard'

const Courses = () => {
  const { viewCourses } = useLearning()
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {viewCourses.map((course) => (
        <CourseCard {...course} href='' key={course.level} />
      ))}
    </section>
  )
}

export default Courses
