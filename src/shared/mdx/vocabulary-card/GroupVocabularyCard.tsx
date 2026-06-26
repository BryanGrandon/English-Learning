import VocabularyCard, { type VocabularyCardProps } from './VocabularyCard'

type Props = {
  values: VocabularyCardProps[]
}

const GroupVocabularyCard = ({ values }: Props) => {
  return (
    <section className='grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-mdx-border rounded-2xl p-4 '>
      {values?.map((el) => (
        <VocabularyCard word={el.word} translation={el.translation} pronunciation={el.pronunciation} />
      ))}
    </section>
  )
}

export default GroupVocabularyCard
