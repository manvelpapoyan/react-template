import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: '300px',
  margin: '0 auto',

  [theme.breakpoints.down('xl')]: {}
}))
