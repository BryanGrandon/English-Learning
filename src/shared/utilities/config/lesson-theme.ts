import { ALL_VERSIONS_OF_THE_LESSONS } from '@shared/constants/lesson-variants'

type AllVersionOfTheLessons = keyof typeof ALL_VERSIONS_OF_THE_LESSONS

type LessonTheme = {
  variant: AllVersionOfTheLessons
}

export const createLessonTheme = ({ variant }: LessonTheme) => {
  const { color, icon } = ALL_VERSIONS_OF_THE_LESSONS[variant]

  return {
    color,
    icon,
    background: `${color}15`,
  }
}
