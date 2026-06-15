type LessonColumnsProps = {
  children: React.ReactNode
  className?: string
}

export default function LessonColumns({ className = '', children }: LessonColumnsProps) {
  return <section className={`flex flex-col gap-4 ${className}`}>{children}</section>
}
