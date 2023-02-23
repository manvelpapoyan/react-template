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
      ':nth-of-type(1)': {
        marginTop: '60px'
      },
      ':nth-of-type(2)': {
        marginTop: '20px'
      }
    },
    '.MuiFormLabel-root': {
      marginBottom: '10px'
    }
  },

  '.MuiButton-root': {
    width: '100%',
    marginTop: '60px',
    marginBottom: '20px'
  },
  '.MuiTypography-body1': {
    fontSize: '15px',
    lineHeight: '18px',
    color: 'rgba(32, 31, 33, 0.5)',
    cursor: 'pointer',
    a: {
      textDecorationLine: 'underline'
    }
  },

  [theme.breakpoints.down('xl')]: {}
}))
