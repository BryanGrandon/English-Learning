import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Icons from './Icons'
import { ICON_VARIATIONS } from './icon-variation'

describe('Icons', () => {
  it('renders without crashing', () => {
    const { container } = render(<Icons variant='position' />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it.each(Object.entries(ICON_VARIATIONS))('renders the correct variant %s', (variant) => {
    const { container } = render(<Icons variant={variant as keyof typeof ICON_VARIATIONS} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
