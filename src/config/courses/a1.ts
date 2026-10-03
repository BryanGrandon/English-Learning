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
      icon: Tag,
      lessons: [
        { order: 1, key: 'basic-nouns', title: 'What is a Noun?' },
        { order: 2, key: 'common-and-proper-nouns', title: 'Common and Proper Nouns' },
        { order: 3, key: 'singular-and-plural-nouns', title: 'Singular and Plural Nouns' },
        { order: 4, key: 'regular-plurals', title: 'Regular Plurals' },
      ],
    },

    {
      order: 2,
      key: 'articles',
      title: 'Articles',
      icon: FileText,
      lessons: [
        { order: 1, key: 'indefinite-article', title: 'Indefinite Article' },
        { order: 2, key: 'definite-article', title: 'Definite Article' },
      ],
    },

    {
      order: 3,
      key: 'pronouns',
      title: 'Pronouns',
      icon: UserRound,
      lessons: [
        { order: 1, key: 'personal-pronouns', title: 'Personal Pronouns' },
        { order: 2, key: 'the-pronoun-it', title: 'The Pronoun It' },
        { order: 3, key: 'possessive-pronouns', title: 'Possessive Pronouns' },
        { order: 4, key: 'demonstrative-pronouns', title: 'Demonstrative Pronouns' },
      ],
    },

    {
      order: 4,
      key: 'adjectives',
      title: 'Adjectives',
      icon: Palette,
      lessons: [
        { order: 1, key: 'basic-adjectives', title: 'What Are Adjectives?' },
        { order: 2, key: 'adjective-position', title: 'Adjective Position' },
        { order: 3, key: 'adjectives-with-be', title: 'Adjectives with Be' },
      ],
    },

    {
      order: 5,
      key: 'sentence-structure',
      title: 'Sentence Structure',
      icon: AlignLeft,
      lessons: [
        { order: 1, key: 'subject-and-predicate', title: 'Subject and Predicate' },
        { order: 2, key: 'constructing-sentences', title: 'Constructing Sentences' },
        { order: 3, key: 'basic-word-order', title: 'Basic Word Order' },
      ],
    },

    {
      order: 6,
      key: 'verbs',
      title: 'Verbs',
      icon: Zap,
      lessons: [
        { order: 1, key: 'basic-verbs', title: 'What is a Verb?' },
        { order: 2, key: 'be', title: 'The Verb Be' },
        { order: 3, key: 'have', title: 'The Verb Have' },
        { order: 4, key: 'do', title: 'The Verb Do' },
        { order: 5, key: 'common-verbs', title: 'Common Verbs' },
        { order: 6, key: 'imperatives', title: 'Imperatives' },
      ],
    },

    {
      order: 7,
      key: 'present-tenses',
      title: 'Present Tenses',
      icon: Clock3,
      lessons: [
        { order: 1, key: 'present-simple', title: 'Present Simple' },
        { order: 2, key: 'present-simple-be', title: 'Present Simple with Be' },
        { order: 3, key: 'present-continuous', title: 'Present Continuous' },
      ],
    },

    {
      order: 8,
      key: 'questions-and-negatives',
      title: 'Questions and Negatives',
      icon: MessageCircleQuestion,
      lessons: [
        { order: 1, key: 'yes-no-questions', title: 'Yes/No Questions' },
        { order: 2, key: 'wh-questions', title: 'WH-Questions' },
        { order: 3, key: 'negative-sentences', title: 'Negative Sentences' },
      ],
    },

    {
      order: 9,
      key: 'there-is-there-are',
      title: 'There Is / There Are',
      icon: MapPin,
      lessons: [
        { order: 1, key: 'there-is', title: 'There Is' },
        { order: 2, key: 'there-are', title: 'There Are' },
      ],
    },

    {
      order: 10,
      key: 'possession',
      title: 'Possession',
      icon: HandCoins,
      lessons: [
        { order: 1, key: 'possessive-s', title: 'Possessive ’s' },
        { order: 2, key: 'have-have-got', title: 'Have / Have Got' },
      ],
    },

    {
      order: 11,
      key: 'prepositions',
      title: 'Prepositions',
      icon: Navigation,
      lessons: [
        { order: 1, key: 'prepositions-of-place', title: 'Prepositions of Place' },
        { order: 2, key: 'prepositions-of-time', title: 'Prepositions of Time' },
        { order: 3, key: 'basic-prepositions-of-movement', title: 'Basic Prepositions of Movement' },
      ],
    },

    {
      order: 12,
      key: 'numbers-dates-time',
      title: 'Numbers, Dates and Time',
      icon: CalendarClock,
      lessons: [
        { order: 1, key: 'cardinal-numbers', title: 'Cardinal Numbers' },
        { order: 2, key: 'ordinal-numbers', title: 'Ordinal Numbers' },
        { order: 3, key: 'days-and-months', title: 'Days and Months' },
        { order: 4, key: 'dates', title: 'Dates' },
        { order: 5, key: 'telling-the-time', title: 'Telling the Time' },
      ],
    },

    {
      order: 13,
      key: 'quantifiers',
      title: 'Quantifiers',
      icon: ListFilter,
      lessons: [
        { order: 1, key: 'some-and-any', title: 'Some / Any' },
        { order: 2, key: 'much-and-many', title: 'Much / Many' },
        { order: 3, key: 'a-lot-of-and-lots-of', title: 'A Lot Of / Lots Of' },
        { order: 4, key: 'a-few-and-a-little', title: 'A Few / A Little' },
      ],
    },

    {
      order: 14,
      key: 'can-cant',
      title: 'Can / Can’t',
      icon: ShieldCheck,
      lessons: [
        { order: 1, key: 'can-for-ability', title: 'Can for Ability' },
        { order: 2, key: 'can-for-permission', title: 'Can for Permission' },
        { order: 3, key: 'can-for-requests', title: 'Can for Requests' },
        { order: 4, key: 'can-questions-and-short-answers', title: 'Can Questions and Short Answers' },
      ],
    },

    {
      order: 15,
      key: 'conjunctions',
      title: 'Conjunctions',
      icon: Link2,
      lessons: [
        { order: 1, key: 'and', title: 'And' },
        { order: 2, key: 'but', title: 'But' },
        { order: 3, key: 'or', title: 'Or' },
        { order: 4, key: 'because', title: 'Because' },
        { order: 5, key: 'so', title: 'So' },
      ],
    },
  ],
} as const
