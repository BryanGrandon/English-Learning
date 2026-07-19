import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Grammar from './Grammar'
import { GRAMMAR_CONFIG } from './grammar.config'

describe('Grammar', () => {
  it('Renders the title', () => {
    render(
      <Grammar type='rule' title='General Rule' description='Description of the rule.'>
        Rule content goes here.
      </Grammar>,
    )
    expect(screen.getByRole('heading', { name: 'General Rule' })).toBeInTheDocument()
  })

  it('renders the description when provided', () => {
    render(
      <Grammar type='rule' title='General Rule' description='Description of the rule.'>
        Rule content goes here.
      </Grammar>,
    )
    expect(screen.getByText('Description of the rule.')).toBeInTheDocument()
  })

  it('Does not render the description when it is not provided', () => {
    render(
      <Grammar type='rule' title='General Rule'>
        Rule content goes here.
      </Grammar>,
    )
    expect(screen.queryByText('Description of the rule.')).not.toBeInTheDocument()
  })

  it('Renders the children', () => {
    render(
      <Grammar type='rule' title='General Rule'>
        Rule content goes here.
      </Grammar>,
    )
    expect(screen.getByText('Rule content goes here.')).toBeInTheDocument()
  })

  it('Renders the type label', () => {
    render(
      <Grammar type='rule' title='General Rule'>
        Rule content goes here.
      </Grammar>,
    )
    expect(screen.getByText('rule')).toBeInTheDocument()
  })

  it('Renders the icon', () => {
    const { container } = render(
      <Grammar type='rule' title='General Rule'>
        Rule content goes here.
      </Grammar>,
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('applies the configured colors', () => {
    const { container } = render(
      <Grammar type='rule' title='General Rule'>
        Rule content goes here.
      </Grammar>,
    )
    const root = container.firstElementChild
    const header = container.querySelector('header')

    expect(root).toHaveStyle({
      borderColor: GRAMMAR_CONFIG.rule.color,
      backgroundColor: GRAMMAR_CONFIG.rule.background,
    })
    expect(header).toHaveStyle({
      borderColor: GRAMMAR_CONFIG.rule.color,
    })
  })

  it.each(Object.keys(GRAMMAR_CONFIG))('renders the "%s" type', (type) => {
    render(
      <Grammar type={type as keyof typeof GRAMMAR_CONFIG} title='Test Title'>
        Content
      </Grammar>,
    )
    expect(screen.getByText(new RegExp(type, 'i'))).toBeInTheDocument()
  })
})
