import type { Meta, StoryObj } from '@storybook/react'
import { BUTTON_VARIANTS, SIZES } from '../../constants'
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
    label: Button.displayName,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Borderless = {
  args: {
    label: 'Borderless',
  },
}

export const Gray = {
  args: {
    label: 'Gray',
    variant: 'gray',
  },
}

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline',
  },
}

export const AllVariants = {
  render: () => (
    <div className="flex flex-col items-center gap-1">
      {Object.values(BUTTON_VARIANTS).map((variant) => (
        <Button key={variant} variant={variant} label={Button.displayName} />
      ))}
    </div>
  ),
}

export const SmallButton = {
  args: {
    size: SIZES.sm,
  },
}

export const DefaultSizeButton = {
  args: {
    size: SIZES.md,
  },
}

export const LargeButton = {
  args: {
    size: SIZES.lg,
  },
}

export const AllSizes = {
  render: () => (
    <div className="flex flex-col items-center gap-1">
      {Object.values(SIZES).map((size) => (
        <Button key={size} size={size} label={Button.displayName} />
      ))}
    </div>
  ),
}

export const ButtonWithChildren = {
  args: {
    children: <span>Text not label</span>,
    label: '',
  },
}

export const ButtonAsLink = {
  args: {
    as: 'a',
    href: 'https://holakirr.com',
    label: 'Link',
  },
}
