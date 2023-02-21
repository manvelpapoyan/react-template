import 'styled-components'
import { Theme } from '@mui/material/styles'

interface CustomTheme {
  // ...
}
declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface Theme extends CustomTheme {}
  // eslint-disable-next-line no-unused-vars
  interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
