import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import LessonBlock from './LessonBlock'
import { LESSON_BLOCK_VARIANTS } from './constants'

describe('LessonBlock', () => {
  it('renders children content', () => {
    render(
      <LessonBlock variant='position'>
        <p>Example content</p>
      </LessonBlock>,
    )

    expect(screen.getByText('Example content')).toBeInTheDocument()
  })

  it.each(Object.entries(LESSON_BLOCK_VARIANTS))('renders the correct title for variant %s', (variant, config) => {
    render(
      <LessonBlock variant={variant as keyof typeof LESSON_BLOCK_VARIANTS}>
        <p>Content</p>
      </LessonBlock>,
    )

    expect(screen.getByText(config.title)).toBeInTheDocument()
  })
})
