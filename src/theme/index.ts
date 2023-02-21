import { createTheme } from '@mui/material/styles'
import { palette } from '@theme/palette'
import { breakpoints } from '@theme/breakpoints'
import { COLORS } from '@utils/colors'

const theme = createTheme({
  palette,
  breakpoints: {
    values: breakpoints
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'green',
          fontSize: '1rem'
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          border: '1px solid #000'
        }
      }
    }
  },
  bg: {
    background: COLORS.gray,
    contentWrapper: COLORS.white
  },
  text: {
    main: 'white',
    light: 'white'
  }
})

export default theme
