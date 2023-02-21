import { RouteEnum } from '@appTypes/enums/global'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

export const StyledWrapper = styled(Box)<{ type: RouteEnum }>(({ theme, type }) => ({
  background:
    type === RouteEnum.PUBLIC ? theme.palette.background.paper : theme.palette.background.default,
  overflow: 'hidden',

  '> .MuiBox-root': {
    background: theme.palette.background.paper,
    maxWidth: theme.breakpoints.values.xl,
    width: '100%',
    maxHeight: '745px',
    height: '100vh',
    padding: '40px',
    margin: '40px auto 40px auto'
  },

  [theme.breakpoints.down('xl')]: {
    padding: '25px',

    '> .MuiBox-root': {
      padding: '25px',
      margin: '0'
    }
  }
}))
