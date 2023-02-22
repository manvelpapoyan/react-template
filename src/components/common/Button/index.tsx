import React from 'react'

import MuiButton from '@mui/material/Button'

const Button = ({ children }: { children: string | React.ReactNode }) => {
  return <MuiButton>{children}</MuiButton>
}

export default Button
