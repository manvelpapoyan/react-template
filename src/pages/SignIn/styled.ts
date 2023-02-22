import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: '300px',
  margin: '0 auto',

  '.MuiTypography-h1': {
    textAlign: 'center'
  },

  '.MuiBox-root': {
    '.MuiFormControl-root': {
      ':nth-child(1)': {
        marginTop: '60px'
      },
      ':nth-child(2)': {
        marginTop: '20px'
      }
    },
    '.MuiFormControlLabel-root': {
      height: '18px',
      margin: '18px 0 0 0',

      '.MuiTypography-root': {
        marginLeft: '8px'
      }
    }
  },

  '.MuiButton-root': {
    width: '100%',
    marginTop: '60px',
    marginBottom: '20px'
  },

  [theme.breakpoints.down('xl')]: {}
}))
