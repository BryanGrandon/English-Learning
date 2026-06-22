type LessonColumnsProps = {
  children: React.ReactNode
  className?: string
}

export default function LessonColumns({ className = '', children }: LessonColumnsProps) {
  return <section className={`grid grid-cols-1 gap-4 ${className}`}>{children}</section>
}
