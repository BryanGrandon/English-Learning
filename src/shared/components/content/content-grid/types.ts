export type ContentGridProps = {
  children: React.ReactNode
  columns?: string
  rows?: string
  areas?: string
  gap?: string
  className?: string
}

export type ContentGridItemProps = {
  children: React.ReactNode
  area?: string
  column?: string
  row?: string
  className?: string
}
