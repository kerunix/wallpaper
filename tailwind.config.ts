import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        background: '#2e2e2e',
        comments: '#797979',
        white: '#d6d6d6',
        yellow: '#e5b567',
        green: '#b4d273',
        orange: '#e87d3e',
        purple: '#9e86c8',
        pink: '#b05279',
        blue: '#6c99bb',
      }
    }
  }
}
