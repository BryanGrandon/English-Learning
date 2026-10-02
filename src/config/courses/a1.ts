import { COURSES_CONFIG } from '../courses'

const { A1 } = COURSES_CONFIG

export const A1_LEVEL_TOPICS = {
  level: A1.key,

  topics: [
    {
      order: 1,
      key: 'nouns',
      lessons: [
        { order: 1, key: 'basic-nouns' },
        { order: 2, key: 'common-and-proper-nouns' },
        { order: 3, key: 'singular-and-plural-nouns' },
        { order: 4, key: 'regular-plurals ??' },
      ],
    },

    {
      order: 2,
      key: 'articles',
      lessons: [
        { order: 1, key: 'indefinite-article' },
        { order: 2, key: 'definite-article' },
      ],
    },

    {
      order: 3,
      key: 'pronouns',
      lessons: [
        { order: 1, key: 'personal-pronouns' },
        { order: 2, key: 'the-pronoun-it' },
        { order: 3, key: 'possessive-pronouns' },
        { order: 4, key: 'demonstrative-pronouns' },
      ],
    },

    {
      order: 4,
      key: 'adjectives',
      lessons: [
        { order: 1, key: 'basic-adjectives' },
        { order: 2, key: 'adjective-position' },
        { order: 3, key: 'adjectives-with-be' },
      ],
    },

    {
      order: 5,
      key: 'sentence-structure',
      lessons: [
        { order: 1, key: 'subject-and-predicate' },
        { order: 2, key: 'constructing-sentences' },
        { order: 3, key: 'basic-word-order' },
      ],
    },

    {
      order: 6,
      key: 'verbs',
      lessons: [
        { order: 1, key: 'basic-verbs' },
        { order: 2, key: 'be' },
        { order: 3, key: 'have' },
        { order: 4, key: 'do' },
        { order: 5, key: 'common-verbs' },
        { order: 6, key: 'imperatives' },
      ],
    },

    {
      order: 7,
      key: 'present-tenses',
      lessons: [
        { order: 1, key: 'present-simple' },
        { order: 2, key: 'present-simple-be' },
        { order: 3, key: 'present-continuous' },
      ],
    },

    {
      order: 8,
      key: 'questions-and-negatives',
      lessons: [
        { order: 1, key: 'yes-no-questions' },
        { order: 2, key: 'wh-questions' },
        { order: 3, key: 'negative-sentences' },
      ],
    },

    {
      order: 9,
      key: 'there-is-there-are',
      lessons: [
        { order: 1, key: 'there-is' },
        { order: 2, key: 'there-are' },
      ],
    },

    {
      order: 10,
      key: 'possession',
      lessons: [
        { order: 1, key: 'possessive-s' },
        { order: 2, key: 'have-have-got' },
      ],
    },

    {
      order: 11,
      key: 'prepositions',
      lessons: [
        { order: 1, key: 'prepositions-of-place' },
        { order: 2, key: 'prepositions-of-time' },
        { order: 3, key: 'basic-prepositions-of-movement' },
      ],
    },

    {
      order: 12,
      key: 'numbers-dates-time',
      lessons: [
        { order: 1, key: 'cardinal-numbers' },
        { order: 2, key: 'ordinal-numbers' },
        { order: 3, key: 'days-and-months' },
        { order: 4, key: 'dates' },
        { order: 5, key: 'telling-the-time' },
      ],
    },

    {
      order: 13,
      key: 'quantifiers',
      lessons: [
        { order: 1, key: 'some-and-any' },
        { order: 2, key: 'much-and-many' },
        { order: 3, key: 'a-lot-of-and-lots-of' },
        { order: 4, key: 'a-few-and-a-little' },
      ],
    },

    {
      order: 14,
      key: 'can-cant',
      lessons: [
        { order: 1, key: 'can-for-ability' },
        { order: 2, key: 'can-for-permission' },
        { order: 3, key: 'can-for-requests' },
        { order: 4, key: 'can-questions-and-short-answers' },
      ],
    },

    {
      order: 15,
      key: 'conjunctions',
      lessons: [
        { order: 1, key: 'and' },
        { order: 2, key: 'but' },
        { order: 3, key: 'or' },
        { order: 4, key: 'because' },
        { order: 5, key: 'so ??' },
      ],
    },
  ],
}
