type LessonGridProps = {
  children: React.ReactNode
  className?: string
}

export default function LessonGrid({ className = '', children }: LessonGridProps) {
  return <section className={`grid grid-cols-1 gap-4 ${className}`}>{children}</section>
}
