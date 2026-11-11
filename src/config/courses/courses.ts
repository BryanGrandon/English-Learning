import { URLS_COURSES } from '@config/routes'
import type { EnglishLevel } from '@shared/constants/english-level'
import { Sprout, BookOpen, TrendingUp, Rocket, Award, Brain, type LucideIcon } from 'lucide-react'

type CourseConfig = {
  level: EnglishLevel
  title: string
  heading: string
  description: string
  icon: LucideIcon
  url: string
}

export const COURSES_CONFIG: Record<EnglishLevel, CourseConfig> = {
  A1: {
    level: 'A1',
    title: 'Beginner',
    heading: 'Build a strong foundation in English',
    description: 'Curso básico de inglés para quienes están empezando.',
    icon: Sprout,
    url: URLS_COURSES.A1,
  },
  A2: {
    level: 'A2',
    title: 'Elementary',
    heading: 'Expand your everyday English',
    description: 'Curso de inglés para desarrollar tus conocimientos básicos.',
    icon: BookOpen,
    url: URLS_COURSES.A2,
  },
  B1: {
    level: 'B1',
    title: 'Intermediate',
    heading: 'Become an independent English speaker',
    description: 'Curso de inglés para mejorar tu comunicación cotidiana.',
    icon: TrendingUp,
    url: URLS_COURSES.B1,
  },
  B2: {
    level: 'B2',
    title: 'Upper-Intermediate',
    heading: 'Communicate with confidence',
    description: 'Curso de inglés para hablar con mayor fluidez y confianza.',
    icon: Rocket,
    url: URLS_COURSES.B2,
  },
  C1: {
    level: 'C1',
    title: 'Advanced',
    heading: 'Master advanced English communication',
    description: 'Curso avanzado para comunicarte con precisión y naturalidad.',
    icon: Award,
    url: URLS_COURSES.C1,
  },
  C2: {
    level: 'C2',
    title: 'Proficient',
    heading: 'Achieve English proficiency',
    description: 'Curso para alcanzar un dominio avanzado y completo del inglés.',
    icon: Brain,
    url: URLS_COURSES.C2,
  },
} as const

export const COURSES: CourseConfig[] = Object.values(COURSES_CONFIG)
