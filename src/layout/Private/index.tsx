import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Header from '@components/Header'
import ContentWrapper from '@components/Hocs/Content'

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
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Box>
  )
}

export default LayoutPrivate
