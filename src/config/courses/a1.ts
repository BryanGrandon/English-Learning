import {
  AlignLeft,
  CalendarClock,
  Clock3,
  FileText,
  HandCoins,
  Link2,
  ListFilter,
  MapPin,
  MessageCircleQuestion,
  Navigation,
  Palette,
  ShieldCheck,
  Tag,
  UserRound,
  Zap,
} from 'lucide-react'

import { COURSES_CONFIG } from '../courses'
import { type LevelTopics } from '@shared/utilities/types/level-topics.ts'

const { A1 } = COURSES_CONFIG

export const A1_LEVEL_TOPICS: LevelTopics = {
  level: A1.key,

  topics: [
    {
      order: 1,
      key: 'nouns',
      title: 'Nouns',
      description: 'Learn how to identify and use nouns in English.',
      icon: Tag,
      lessons: [
        { key: 'basic-nouns' },
        { key: 'common-and-proper-nouns' },
        { key: 'singular-and-plural-nouns' },
        // { key: 'regular-plurals' },
      ],
    },

    {
      order: 2,
      key: 'articles',
      title: 'Articles',
      description: 'Learn how to use a, an, and the with nouns.',
      icon: FileText,
      lessons: [{ key: 'indefinite-article' }, { key: 'definite-article' }],
    },

    {
      order: 3,
      key: 'pronouns',
      title: 'Pronouns',
      description: 'Learn how to use pronouns to replace nouns.',
      icon: UserRound,
      lessons: [
        { key: 'personal-pronouns' },
        { key: 'the-pronoun-it' },
        { key: 'possessive-pronouns' },
        { key: 'demonstrative-pronouns' },
      ],
    },

    {
      order: 4,
      key: 'adjectives',
      title: 'Adjectives',
      description: 'Learn how to describe people, places, and things.',
      icon: Palette,
      lessons: [{ key: 'basic-adjectives' }, { key: 'adjective-position' }, { key: 'adjectives-with-be' }],
    },

    {
      order: 5,
      key: 'sentence-structure',
      title: 'Sentence Structure',
      description: 'Learn how to build simple and correct sentences.',
      icon: AlignLeft,
      lessons: [{ key: 'subject-and-predicate' }, { key: 'constructing-sentences' }, { key: 'basic-word-order' }],
    },

    {
      order: 6,
      key: 'verbs',
      title: 'Verbs',
      description: 'Learn the basic verbs and how to use them in sentences.',
      icon: Zap,
      lessons: [
        { key: 'basic-verbs' },
        { key: 'be' },
        { key: 'have' },
        { key: 'do' },
        { key: 'common-verbs' },
        { key: 'imperatives' },
      ],
    },

    {
      order: 7,
      key: 'present-tenses',
      title: 'Present Tenses',
      description: 'Learn how to talk about actions and situations in the present.',
      icon: Clock3,
      lessons: [{ key: 'present-simple' }, { key: 'present-simple-be' }, { key: 'present-continuous' }],
    },

    {
      order: 8,
      key: 'questions-and-negatives',
      title: 'Questions and Negatives',
      description: 'Learn how to ask questions and form negative sentences.',
      icon: MessageCircleQuestion,
      lessons: [{ key: 'yes-no-questions' }, { key: 'wh-questions' }, { key: 'negative-sentences' }],
    },

    {
      order: 9,
      key: 'there-is-there-are',
      title: 'There Is / There Are',
      description: 'Learn how to say that something exists or is present.',
      icon: MapPin,
      lessons: [{ key: 'there-is' }, { key: 'there-are' }],
    },

    {
      order: 10,
      key: 'possession',
      title: 'Possession',
      description: 'Learn how to express ownership and possession in English.',
      icon: HandCoins,
      lessons: [{ key: 'possessive-s' }, { key: 'have-have-got' }],
    },

    {
      order: 11,
      key: 'prepositions',
      title: 'Prepositions',
      description: 'Learn common prepositions of place, time, and movement.',
      icon: Navigation,
      lessons: [
        { key: 'prepositions-of-place' },
        { key: 'prepositions-of-time' },
        { key: 'basic-prepositions-of-movement' },
      ],
    },

    {
      order: 12,
      key: 'numbers-dates-time',
      title: 'Numbers, Dates and Time',
      description: 'Learn how to use numbers, dates, days, months, and time.',
      icon: CalendarClock,
      lessons: [
        { key: 'cardinal-numbers' },
        { key: 'ordinal-numbers' },
        { key: 'days-and-months' },
        { key: 'dates' },
        { key: 'telling-the-time' },
      ],
    },

    {
      order: 13,
      key: 'quantifiers',
      title: 'Quantifiers',
      description: 'Learn how to talk about quantities and amounts.',
      icon: ListFilter,
      lessons: [
        { key: 'some-and-any' },
        { key: 'much-and-many' },
        { key: 'a-lot-of-and-lots-of' },
        { key: 'a-few-and-a-little' },
      ],
    },

    {
      order: 14,
      key: 'modal-verbs',
      title: 'Can / Can’t',
      description: 'Learn how to express ability, permission, and requests.',
      icon: ShieldCheck,
      lessons: [
        { key: 'can-for-ability' },
        { key: 'can-for-permission' },
        { key: 'can-for-requests' },
        { key: 'can-questions-and-short-answers' },
      ],
    },

    {
      order: 15,
      key: 'conjunctions',
      title: 'Conjunctions',
      description: 'Learn how to connect words, phrases, and simple ideas.',
      icon: Link2,
      lessons: [{ key: 'and' }, { key: 'but' }, { key: 'or' }, { key: 'because' }],
    },
  ],
} as const
