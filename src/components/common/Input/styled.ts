import { InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledInput = styled(InputBase)(() => ({
  '.MuiSvgIcon-root': {
    position: 'absolute',
    cursor: 'pointer',
    width: '19px',
    height: '14px',
    right: '16px',
    top: '18px'
  }
}))
