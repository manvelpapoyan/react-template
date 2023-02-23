import { RouteEnum } from '@appTypes/enums/global'
import { Box } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'static',
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',

  '.MuiContainer-root': {
    padding: '0px',

    '.MuiToolbar-root': {
      padding: '25px 0',
      height: 'auto'
    }
  },

  [theme.breakpoints.down('xl')]: {
    '.MuiContainer-root': {
      '.MuiToolbar-root': {
        padding: '25px 25px',
        height: 'auto'
      }
    }
  }
}))

export const LogoWrapper = styled(Box)<{ type: RouteEnum }>(({ type }) => ({
  flexGrow: 1,
  height: type === RouteEnum.PRIVATE ? '25px' : '30px',

  img: {
    height: type === RouteEnum.PRIVATE ? '25px' : '30px'
  }
}))
