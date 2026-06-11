import React from 'react'

type GrammarPointProps = {
  title: string
  className?: string
  children: React.ReactNode
}

const GrammarPoint = ({ title, className = '', children }: GrammarPointProps) => {
  return (
    <section
      className={`grid gap-3 p-4 rounded-xl border border-mdx-border bg-mdx-surface-secondary mdx-shadow ${className}`}
    >
      <h3>{title}</h3>
      {children}
    </section>
  )
}

export default GrammarPoint
