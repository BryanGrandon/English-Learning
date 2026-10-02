import { Sprout, BookOpen, TrendingUp, Rocket, Award, Brain } from 'lucide-react'
import { URLS_COURSES } from './urls'

export const COURSES_CONFIG = {
  A1: {
    key: 'A1',
    title: 'Beginner',
    description: 'Curso básico de inglés para quienes están empezando.',
    icon: Sprout,
    url: URLS_COURSES.A1,
    order: 1,
  },
  A2: {
    key: 'A2',
    title: 'Elementary',
    description: 'Curso de inglés para desarrollar tus conocimientos básicos.',
    icon: BookOpen,
    url: URLS_COURSES.A2,
    order: 2,
  },
  B1: {
    key: 'B1',
    title: 'Intermediate',
    description: 'Curso de inglés para mejorar tu comunicación cotidiana.',
    icon: TrendingUp,
    url: URLS_COURSES.B1,
    order: 3,
  },
  B2: {
    key: 'B2',
    title: 'Upper-Intermediate',
    description: 'Curso de inglés para hablar con mayor fluidez y confianza.',
    icon: Rocket,
    url: URLS_COURSES.B2,
    order: 4,
  },
  C1: {
    key: 'C1',
    title: 'Advanced',
    description: 'Curso avanzado para comunicarte con precisión y naturalidad.',
    icon: Award,
    url: URLS_COURSES.C1,
    order: 5,
  },
  C2: {
    key: 'C2',
    title: 'Proficient',
    description: 'Curso para alcanzar un dominio avanzado y completo del inglés.',
    icon: Brain,
    url: URLS_COURSES.C2,
    order: 6,
  },
} as const

export type CourseLevel = keyof typeof COURSES_CONFIG
export type CourseInformation = (typeof COURSES_CONFIG)[CourseLevel]

const COURSES: CourseInformation[] = Object.values(COURSES_CONFIG)

export { COURSES }
