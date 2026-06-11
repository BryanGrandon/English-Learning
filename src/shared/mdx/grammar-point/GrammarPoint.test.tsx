import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import GrammarPoint from './GrammarPoint'

describe('GrammarPoint', () => {
  it('Render the title', () => {
    render(
      <GrammarPoint title='Possessives'>
        <p>Example content</p>
      </GrammarPoint>,
    )
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Possessives')
  })

  it('Render the children', () => {
    render(
      <GrammarPoint title='Title'>
        <p>Example content</p>
      </GrammarPoint>,
    )
    expect(screen.getByText('Example content')).toBeInTheDocument()
  })

  it('Adds Custom className', () => {
    const { container } = render(
      <GrammarPoint title='Title' className='custom-class'>
        <p>Text</p>
      </GrammarPoint>,
    )
    expect(container.querySelector('section')).toHaveClass('custom-class')
  })
})
