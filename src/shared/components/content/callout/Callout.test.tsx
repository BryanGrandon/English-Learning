import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Callout from './Callout'
import { CALLOUT_CONFIG } from './callout.config'

describe('Callout', () => {
  it('renders the children', () => {
    render(<Callout type='example'>This is an example.</Callout>)

    expect(screen.getByText('This is an example.')).toBeInTheDocument()
  })

  it('renders the callout title from the type', () => {
    render(<Callout type='example'>Content</Callout>)

    expect(screen.getByRole('heading', { name: /example/i })).toBeInTheDocument()
  })

  it('renders the correct icon', () => {
    const { container } = render(<Callout type='example'>Content</Callout>)

    const svg = container.querySelector('svg')

    expect(svg).toBeInTheDocument()
  })

  it('applies the configured colors', () => {
    const { container } = render(<Callout type='example'>Content</Callout>)

    const root = container.querySelector('section')
    const header = container.querySelector('header')

    expect(root).toHaveStyle({
      borderColor: CALLOUT_CONFIG.example.color,
      backgroundColor: CALLOUT_CONFIG.example.background,
    })

    expect(header).toHaveStyle({
      borderColor: CALLOUT_CONFIG.example.color,
    })
  })

  it.each(Object.keys(CALLOUT_CONFIG))('renders the "%s" variant', (type) => {
    render(<Callout type={type as keyof typeof CALLOUT_CONFIG}>Content</Callout>)

    expect(screen.getByRole('heading', { name: new RegExp(type, 'i') })).toBeInTheDocument()
  })
})
