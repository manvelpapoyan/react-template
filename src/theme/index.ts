import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {},
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
  }
})

export default theme
