import React from 'react'

import MuiButton from '@mui/material/Button'

interface IButton {
  children: string | React.ReactNode
  type: 'submit' | 'button'
}

const Button = ({ children, ...rest }: IButton) => {
  return <MuiButton {...rest}>{children}</MuiButton>
}

export default Button
