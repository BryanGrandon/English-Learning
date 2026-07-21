import { cn } from '@shared/lib/cn'
import type { ContentGridProps } from './types'
import ContentGridItem from './ContentGridItem'

const ContentGrid = ({
  children,
  columns = 'repeat(auto-fill, minmax(20rem, 1fr))',
  rows,
  areas,
  gap = '1rem',
  className = '',
}: ContentGridProps) => {
  return (
    <article
      className={cn('grid', className)}
      style={{
        gap,
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gridTemplateAreas: areas,
      }}
    >
      {children}
    </article>
  )
}

ContentGrid.Item = ContentGridItem

export default ContentGrid
