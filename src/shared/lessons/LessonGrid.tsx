import { cn } from '@shared/lib/cn'

type LessonGridProps = {
  children: React.ReactNode
  className?: string
  cols?: {
    sm?: 1 | 2 | 3 | 4
    md?: 1 | 2 | 3 | 4
    lg?: 1 | 2 | 3 | 4
  }
  colsTemplate: 'string'
}

export default function LessonGrid({ className = '', children, cols, colsTemplate }: LessonGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }

  const mdCols = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }

  const lgCols = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }

  return (
    <section
      className={cn(
        'grid gap-4',
        cols?.sm && gridCols[cols.sm],
        cols?.md && mdCols[cols.md],
        cols?.lg && lgCols[cols.lg],
        className,
      )}
      style={{ gridTemplateColumns: colsTemplate }}
    >
      {children}
    </section>
  )
}
