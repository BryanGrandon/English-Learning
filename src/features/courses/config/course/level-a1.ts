import {
  MessageCircleQuestion,
  FileText,
  UserRound,
  Palette,
  Zap,
  Blocks,
  Clock3,
  MapPin,
  CalendarDays,
} from 'lucide-react'

export const LESSONS_A1 = [
  {
    id: 1,
    topic: 'pronouns',
    title: 'Pronouns',
    translation: 'Los pronombres',
    icon: UserRound,
  },
  {
    id: 2,
    topic: 'nouns',
    title: 'Nouns',
    translation: 'Los sustantivos',
    icon: FileText,
  },
  {
    id: 3,
    topic: 'articles',
    title: 'Articles',
    translation: 'Los artículos',
    icon: MessageCircleQuestion,
  },
  {
    id: 4,
    topic: 'adjectives',
    title: 'Adjectives',
    translation: 'Los adjetivos',
    icon: Palette,
  },
  {
    id: 5,
    topic: 'verbs',
    title: 'Verbs',
    translation: 'Los verbos',
    icon: Zap,
  },
  {
    id: 6,
    topic: 'sentence-structure',
    title: 'Sentence Structure',
    translation: 'Estructura de las oraciones',
    icon: Blocks,
  },
  {
    id: 7,
    topic: 'present-tenses',
    title: 'Present Tenses',
    translation: 'Tiempos verbales del presente',
    icon: Clock3,
  },
  {
    id: 8,
    topic: 'prepositions',
    title: 'Prepositions',
    translation: 'Las preposiciones',
    icon: MapPin,
  },
  {
    id: 9,
    topic: 'numbers-dates-time',
    title: 'Numbers, Dates & Time',
    translation: 'Números, fechas y hora',
    icon: CalendarDays,
  },
] as const

const LEVEL_A1 = {
  title: '',
  description: '',
  lessons: LESSONS_A1,
  number_lessons: LESSONS_A1.length,
}
