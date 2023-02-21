import AppBar from '@mui/material/AppBar'
import { styled, Theme } from '@mui/material/styles'

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'white',
  boxShadow: 'none',

  [theme.breakpoints.down('md')]: {
    backgroundColor: theme.bg.background
  }
}))
