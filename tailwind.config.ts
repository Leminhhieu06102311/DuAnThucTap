import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'FE': "#fefefe",
        'main-primary': "#0875ac",
        'breadcump': '#f7f5f2',
        'main-gray': '#f2f2f2'
      },
      maxWidth: {
        'pc-width': '1100px', // PC
      },

    },
  },
  plugins: [require('preline/plugin'),],
}
export default config
