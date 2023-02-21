import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Header from '@components/Header'

function LayoutPrivate() {
  const user = { name: 'david' }
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null || !Object.keys(user).length) {
      // redirect to Public(without user) layout
      navigate('/auth/sign-in')
    }
  }, [user])

  // ...loader

  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  )
}

export default LayoutPrivate
