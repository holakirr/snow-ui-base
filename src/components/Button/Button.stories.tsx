import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['borderless', 'gray', 'outline', 'filled'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'borderless',
    size: 'md',
    label: 'Click Me!',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {
  args: {
    variant: 'filled',
    size: 'md',
    label: 'Filled',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    label: 'Outline',
  },
}
