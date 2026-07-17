import type { NumberCardProps } from './items/NumberCard'
import NumberCard from './items/NumberCard'
import type { PrepositionCardProps } from './items/PrepositionCard'
import PrepositionCard from './items/PrepositionCard'

type VocabularyWord = {
  variant: 'number' | 'preposition'
  words: NumberCardProps[] | PrepositionCardProps[]
}

const VocabularyItem = ({ variant, words }: VocabularyWord) => {
  console.log(variant)
  switch (variant) {
    case 'number':
      const numbers = words as NumberCardProps[]
      return (
        <>
          {numbers.map((data) => (
            <NumberCard key={data.word} {...data} />
          ))}
        </>
      )

    case 'preposition':
      const preposition = words as PrepositionCardProps[]

      return (
        <>
          {preposition.map((data) => (
            <PrepositionCard key={data.term} {...data} />
          ))}
        </>
      )
  }
}

export default VocabularyItem
