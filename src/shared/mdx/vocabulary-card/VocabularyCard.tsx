import type React from 'react'

type VocabularyCardProps = {
  word: React.ReactNode
  translation: React.ReactNode
  pronunciation?: React.ReactNode
}

const VocabularyCard = ({ word, translation, pronunciation }: VocabularyCardProps) => {
  return (
    <aside className='flex gap-4 items-center border border-mdx-border p-2 rounded-lg bg-mdx-surface'>
      <div className='border border-mdx-border bg-mdx-surface-secondary rounded-lg px-4 py-2'>{word}</div>
      <section className='flex flex-col'>
        <p className='text-lg'>{translation}</p>
        {pronunciation && <p className='text-mdx-text-secondary'>{pronunciation}</p>}
      </section>
    </aside>
  )
}

export default VocabularyCard
export type { VocabularyCardProps }
