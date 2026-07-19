import { cn } from '@shared/lib/cn'
import type { ContentGridItemProps } from './types'

const ContentGridItem = ({ children, area, column, row, className = '' }: ContentGridItemProps) => {
  return (
    <div
      className={cn(className)}
      style={{
        gridArea: area,
        gridColumn: column,
        gridRow: row,
      }}
    >
      {children}
    </div>
  )
}

export default ContentGridItem
