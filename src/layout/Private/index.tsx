import { useEffect, memo } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Header from '@components/Header'
import Content from '@components/Hocs/Content'
import { RouteEnum } from '@appTypes/enums/global'
import { useAppSelector } from '@store/hooks'

function LayoutPrivate() {
  const user = useAppSelector((state) => state.auth.user)

  const navigate = useNavigate()

  useEffect(() => {
    if (user === null || !Object.keys(user).length) {
      navigate('/auth/sign-in')
    }
  }, [user])

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
