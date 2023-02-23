import { RouteEnum } from '@appTypes/enums/global'
import { PAGE_ROUTES_PRIVATE } from '@appTypes/enums/pages'
import { Header } from '@components'
import Content from '@components/Hocs/Content'
import { useAppSelector } from '@store/hooks'
import { useEffect, memo } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function LayoutPublic() {
  const user = useAppSelector((state) => state.auth.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (user !== null) {
      // redirect to Private(user) layout
      navigate(PAGE_ROUTES_PRIVATE.HOME)
    }
  }, [user])

  return (
    <>
      <Header type={RouteEnum.PRIVATE} />
      <Content type={RouteEnum.PUBLIC}>
        <Outlet />
      </Content>
    </>
  )
}

export default memo(LayoutPublic)
