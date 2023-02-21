import { useEffect, memo } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Header from '@components/Header'
import Content from '@components/Hocs/Content'
import { RouteEnum } from '@appTypes/enums/global'

function LayoutPrivate() {
  const user = {}
  const navigate = useNavigate()

  useEffect(() => {
    console.log(111)

    if (user === null || !Object.keys(user).length) {
      console.log(2222)
      // redirect to Public(without user) layout
      navigate('/auth/sign-in')
    }
  }, [navigate])

  return (
    <>
      <Header type={RouteEnum.PRIVATE} />
      <Content type={RouteEnum.PRIVATE}>
        <Outlet />
      </Content>
    </>
  )
}

export default memo(LayoutPrivate)
