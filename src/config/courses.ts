import { Sprout, BookOpen, TrendingUp, Rocket, Award, Brain, type LucideIcon } from 'lucide-react'
import type { ENGLISH_LEVEL, EnglishLevel } from '@shared/constants/english-level'
import { URLS_COURSES } from './urls'

type CourseConfig = {
  key: EnglishLevel
  title: string
  heading: string
  icon: LucideIcon
  url: string
}

const COURSES_CONFIG: Record<EnglishLevel, CourseConfig> = {
  A1: {
    key: 'A1',
    title: 'Beginner',
    heading: 'Build a strong foundation in English',
    icon: Sprout,
    url: URLS_COURSES.A1,
  },
  A2: {
    key: 'A2',
    title: 'Elementary',
    heading: 'Expand your everyday English',
    icon: BookOpen,
    url: URLS_COURSES.A2,
  },
  B1: {
    key: 'B1',
    title: 'Intermediate',
    heading: 'Become an independent English speaker',
    icon: TrendingUp,
    url: URLS_COURSES.B1,
  },
  B2: {
    key: 'B2',
    title: 'Upper-Intermediate',
    heading: 'Communicate with confidence',
    icon: Rocket,
    url: URLS_COURSES.B2,
  },
  C1: {
    key: 'C1',
    title: 'Advanced',
    heading: 'Master advanced English communication',
    icon: Award,
    url: URLS_COURSES.C1,
  },
  C2: {
    key: 'C2',
    title: 'Proficient',
    heading: 'Achieve English proficiency',
    icon: Brain,
    url: URLS_COURSES.C2,
  },
} as const

const COURSES_DESCRIPTIONS = {
  A1: {
    topic: 'Learn the basics, get familiar with everyday expressions, and start communicating in simple situations.',
    card: 'Curso básico de inglés para quienes están empezando.',
  },
  A2: {
    topic:
      'Improve your vocabulary, understand common expressions, and communicate with more confidence in familiar situations.',
    card: 'Curso de inglés para desarrollar tus conocimientos básicos.',
  },
  B1: {
    topic:
      'Develop your fluency, express your ideas clearly, and handle everyday conversations with greater independence.',
    card: 'Curso de inglés para mejorar tu comunicación cotidiana.',
  },
  B2: {
    topic:
      'Strengthen your fluency, understand more complex texts, and express your opinions confidently in a variety of situations.',
    card: 'Curso de inglés para hablar con mayor fluidez y confianza.',
  },
  C1: {
    topic:
      'Refine your language skills, understand nuanced ideas, and communicate effectively in academic, professional, and social contexts.',
    card: 'Curso avanzado para comunicarte con precisión y naturalidad.',
  },
  C2: {
    topic:
      'Perfect your understanding of subtle meanings, express yourself precisely, and navigate even the most complex communication with ease.',
    card: 'Curso para alcanzar un dominio avanzado y completo del inglés.',
  },
}

// const COURSES: CourseInformation[] = Object.values(COURSES_CONFIG)

export type CourseInformation = CourseConfig & {
  description: string
}

const COURSES_CARD: CourseInformation[] = Object.values(COURSES_CONFIG).map((el) => ({
  description: COURSES_DESCRIPTIONS[el.key].card,
  ...el,
}))

const COURSES_TOPIC: CourseInformation[] = Object.values(COURSES_CONFIG).map((el) => ({
  description: COURSES_DESCRIPTIONS[el.key].topic,
  ...el,
}))

export { COURSES_CARD, COURSES_TOPIC }
