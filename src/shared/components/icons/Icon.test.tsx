import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Icon from './Icon'
import { ICONS } from './icon-variation'

describe('Icon', () => {
  it.each(Object.keys(ICONS))('should render the "%s" icon', (name) => {
    render(<Icon name={name as keyof typeof ICONS} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should use the default size', () => {
    render(<Icon name='position' />)

    expect(screen.getByTestId('icon')).toHaveAttribute('width', '20')
    expect(screen.getByTestId('icon')).toHaveAttribute('height', '20')
  })

  it('should accept a custom size', () => {
    render(<Icon name='position' size={32} />)

    expect(screen.getByTestId('icon')).toHaveAttribute('width', '32')
    expect(screen.getByTestId('icon')).toHaveAttribute('height', '32')
  })

  it('should apply the className', () => {
    render(<Icon name='position' className='text-blue-500' />)

    expect(screen.getByTestId('icon')).toHaveClass('text-blue-500')
  })
})
