import { createTheme } from '@mui/material/styles'
import { palette } from '@theme/palette'
import { breakpoints } from '@theme/breakpoints'

const theme = createTheme({
  palette,
  breakpoints: {
    values: breakpoints
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          height: '18px',
          margin: '18px 0 10px 0',

          '.MuiTypography-root': {
            marginLeft: '8px'
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: 'red',
          fontSize: '10px'
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: '0',
          '.MuiSvgIcon-root': {
            stroke: '#000',
            color: '#fff'
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box !important'
        },
        '.Mui-error': {
          '.MuiInputBase-input': {
            border: '1px solid red'
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: 'relative',
          fontWeight: '500',
          fontSize: '13px',
          lineHeight: '16px',
          color: '#201F21'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: '16px 15px',
          width: '300px',
          maxHeight: '50px',
          height: '50px',
          borderRadius: '10px',
          background: '#fff',
          border: '1px solid #252525'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: '700',
          fontSize: '48px',
          lineHeight: '58px',
          letterSpacing: '-0.02em',
          color: '#252525'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          background: '#201F21',
          border: '1px solid #000',
          color: '#fff',
          fontSize: '16px',
          fontWeight: '600',
          lineHeight: '19px',
          width: '250px',
          height: '51px',

          ':hover': {
            background: '#201F21'
          }
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
