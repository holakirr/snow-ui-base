import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button label="Click me" />)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-transparent') // primary variant
  })

  it('renders with secondary variant', () => {
    render(<Button variant="gray" label="Secondary" />)
    const button = screen.getByRole('button', { name: /secondary/i })
    expect(button).toHaveClass('bg-black/5')
  })

  it('renders with outline variant', () => {
    render(<Button variant="outline" label={'Outline'} />)
    const button = screen.getByRole('button', { name: /outline/i })
    expect(button).toHaveClass('border')
    expect(button).toHaveClass('border-black/10')
  })

  it('renders with filled variant', () => {
    render(<Button variant="filled" label={'Filled'} />)
    const button = screen.getByRole('button', { name: /filled/i })
    expect(button).toHaveClass('bg-brand')
    expect(button).toHaveClass('text-white')
    expect(button).toHaveClass('hover:bg-brandHover')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm" label="Small" />)
    let button = screen.getByRole('button', { name: /small/i })
    expect(button).toHaveClass('px-2')
    expect(button).toHaveClass('py-1')

    rerender(<Button size="lg" label="Large" />)
    button = screen.getByRole('button', { name: /large/i })
    expect(button).toHaveClass('px-6')
    expect(button).toHaveClass('py-4')
  })
})
