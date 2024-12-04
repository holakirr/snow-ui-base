import { type VariantProps, cva, cx } from 'class-variance-authority'
import { ICON_SIZES, ROLES } from '../../constants'
import type { Icon, TextSize } from '../../types'
import { Text } from '../Text'

/**
 * Props for the Button component.
 */
type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonStyles> & {
    /**
     * The label text or number displayed on the button.
     */
    label?: string | number

    /**
     * The icon component to be displayed on the right side of the button.
     */
    rightIcon?: Icon

    /**
     * The icon component to be displayed on the left side of the button.
     */
    leftIcon?: Icon

    /**
     * The size of the text displayed on the button.
     */
    textSize?: TextSize
  }

const buttonStyles = cva(
  'group transition-all hover:cursor-pointer disabled:cursor-not-allowed disabled:text-black/10 inline-flex justify-center items-center focus:outline-hidden focus:ring-4 focus:ring-black/5 active:scale-95',
  {
    variants: {
      variant: {
        borderless: 'text-black bg-transparent font-normal hover:bg-black/5',
        gray: 'text-black bg-black/5 hover:bg-black/20 disabled:bg-black/5 focus:ring-offset-2',
        outline:
          'text-black bg-transparent border border-black/10 border-solid hover:bg-black/5 disabled:border-black/10',
        filled: 'text-white bg-brand hover:bg-brandHover disabled:bg-black/4 dark:bg-white',
      },
      size: {
        sm: 'text-sm py-1 px-2 rounded-lg gap-1',
        md: 'text-base py-2 px-4 rounded-xl gap-2',
        lg: 'text-lg py-4 px-6 rounded-2xl gap-2',
      },
    },
    defaultVariants: {
      variant: 'borderless',
      size: 'sm',
    },
  },
)

const IconSizes = {
  sm: ICON_SIZES[16],
  md: ICON_SIZES[20],
  lg: ICON_SIZES[24],
}

const IconButtonPaddings = {
  sm: 'p-1',
  md: 'p-2',
  lg: 'p-4',
}

/**
 * Button component displays a button element.
 */
const Button = ({
  variant = 'borderless',
  size = 'sm',
  className,
  label,
  textSize,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ref,
  ...props
}: ButtonProps) => (
  <button
    ref={ref}
    type="button"
    title={label?.toString() || 'Button title'}
    className={cx(buttonStyles({ variant, size, className }), {
      [IconButtonPaddings[size || 'sm']]: LeftIcon && !RightIcon && !label,
    })}
    role={ROLES.button}
    aria-label={label?.toString() || 'Button aria label'}
    {...props}
  >
    {LeftIcon && <LeftIcon size={IconSizes[size || 'sm']} alt={`Left icon in button ${label}`} />}
    {label && <Text className="group-hover:px-1 text-center text-inherit">{label}</Text>}
    {RightIcon && (
      <RightIcon size={IconSizes[size || 'sm']} alt={`Right icon in button ${label}`} />
    )}
  </button>
)

Button.displayName = 'Button'
export { Button }
