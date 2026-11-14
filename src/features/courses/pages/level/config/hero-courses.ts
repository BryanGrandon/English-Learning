import { GraduationCap } from 'lucide-react'
import type { EnglishLevel } from '@shared/constants/english-level'
import { COURSES_CONFIG } from '@config/courses/courses'

type HeroCourse = {
  title: string
  highlight: string
  label: string
  labelIcon: typeof GraduationCap
  description: string
}

const HERO_COURSES_CONFIG = {
  A1: {
    title: 'Start Your English',
    highlight: 'Journey',
    label: 'Beginner',
    labelIcon: GraduationCap,
    description:
      'Build a strong foundation in English. Learn essential vocabulary, basic grammar and everyday expressions step by step.',
  },

  A2: {
    title: 'Expand Your English',
    highlight: 'Skills',
    label: 'Elementary',
    labelIcon: GraduationCap,
    description:
      'Improve your communication skills, expand your vocabulary and learn to handle everyday situations with greater confidence.',
  },

  B1: {
    title: 'Take Your English',
    highlight: 'Further',
    label: 'Intermediate',
    labelIcon: GraduationCap,
    description: 'Develop your fluency, express your opinions and communicate more confidently in familiar situations.',
  },

  B2: {
    title: 'Reach New English',
    highlight: 'Horizons',
    label: 'Upper-Intermediate',
    labelIcon: GraduationCap,
    description:
      'Strengthen your language skills, understand complex topics and communicate effectively in a wide range of situations.',
  },

  C1: {
    title: 'Master Your English',
    highlight: 'Potential',
    label: 'Advanced',
    labelIcon: GraduationCap,
    description:
      'Refine your fluency, understand sophisticated language and express complex ideas with precision and confidence.',
  },

  C2: {
    title: 'Achieve English',
    highlight: 'Mastery',
    description:
      'Reach the highest level of proficiency. Master subtle language nuances and communicate effortlessly in virtually any context.',
  },
}

export const HERO_COURSES = Object.fromEntries(
  Object.entries(HERO_COURSES_CONFIG).map(([key, data]) => [
    key,
    {
      ...data,
      label: COURSES_CONFIG[key as EnglishLevel].title,
      labelIcon: COURSES_CONFIG[key as EnglishLevel].icon,
    },
  ]),
) as Record<EnglishLevel, HeroCourse>
