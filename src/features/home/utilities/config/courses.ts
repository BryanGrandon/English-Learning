import { Sprout, BookOpen, TrendingUp, Rocket, Award, Brain } from 'lucide-react'
import type { Course } from '../types/courses'

const COURSES_CONFIG = {
  A1: {
    level: 'A1',
    title: 'Beginner',
    description: 'Curso básico de inglés para quienes están empezando.',
    icon: Sprout,
    color: {
      light: '#16A34A',
      dark: '#4ADE80',
    },
    url: '',
  },

  A2: {
    level: 'A2',
    title: 'Elementary',
    description: 'Curso de inglés para desarrollar tus conocimientos básicos.',
    icon: BookOpen,
    color: {
      light: '#65A30D',
      dark: '#A3E635',
    },
    url: '',
  },

  B1: {
    level: 'B1',
    title: 'Intermediate',
    description: 'Curso de inglés para mejorar tu comunicación cotidiana.',
    icon: TrendingUp,
    color: {
      light: '#CA8A04',
      dark: '#FACC15',
    },
    url: '',
  },

  B2: {
    level: 'B2',
    title: 'Upper Intermediate',
    description: 'Curso de inglés para hablar con mayor fluidez y confianza.',
    icon: Rocket,
    color: {
      light: '#EA580C',
      dark: '#FB923C',
    },
    url: '',
  },

  C1: {
    level: 'C1',
    title: 'Advanced',
    description: 'Curso avanzado para comunicarte con precisión y naturalidad.',
    icon: Award,
    color: {
      light: '#DC2626',
      dark: '#F87171',
    },
    url: '',
  },

  C2: {
    level: 'C2',
    title: 'Proficient',
    description: 'Curso para alcanzar un dominio avanzado y completo del inglés.',
    icon: Brain,
    color: {
      light: '#7C3AED',
      dark: '#A78BFA',
    },
    url: '',
  },
} as const

type Courses = {
  order: number
  data: Course
}

const COURSES: Courses[] = [
  { order: 1, data: COURSES_CONFIG.A1 },
  { order: 2, data: COURSES_CONFIG.A2 },
  { order: 3, data: COURSES_CONFIG.B1 },
  { order: 4, data: COURSES_CONFIG.B2 },
  { order: 5, data: COURSES_CONFIG.C1 },
  { order: 6, data: COURSES_CONFIG.C2 },
]

export { COURSES }
