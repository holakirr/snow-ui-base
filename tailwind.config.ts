import type { Config } from 'tailwindcss'
import { COLOR_SCHEME } from './src/constants'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
  darkMode: [
    'variant',
    [
      '@media (prefers-color-scheme: dark) { &:not(.[data-mode="light"] *) }',
      '&:is([data-mode="dark"] *)',
    ],
  ],
  plugins: [],
  theme: {
    extend: {
      colors: COLOR_SCHEME,
      opacity: {
        4: '0.04',
      },
    },
  },
}

export default config
