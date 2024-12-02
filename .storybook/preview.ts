import { withThemeByDataAttribute } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import './index.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        withThemeByDataAttribute: true,
      },
    },
    layout: 'centered',
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      attributeName: 'data-mode',
      defaultTheme: 'light',
    }),
  ],

  tags: ['autodocs'],
}

export default preview
