import 'styled-components'
import { Theme } from '@mui/material/styles'

interface CustomTheme {
  bg: {
    background: string
    contentWrapper: string
  }
  text: {
    main: string
    light: string
  }
}
declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}

  interface BreakpointOverrides {
    xs: true // removes the `xs` breakpoint
    sm: true
    md: true
    lg: true
    l: true
    xl: true
    el: true
    eel: true
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
