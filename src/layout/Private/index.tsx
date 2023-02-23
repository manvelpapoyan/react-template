import { useEffect, memo } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Header from '@components/Header'
import Content from '@components/Hocs/Content'
import { RouteEnum } from '@appTypes/enums/global'
import { PAGE_ROUTES_PUBLIC } from '@appTypes/enums/pages'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { profileThunk } from '@store/features/auth/auth.actions'

function LayoutPrivate() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const login = useAppSelector((state) => state.auth.login)
  const user = useAppSelector((state) => state.auth.user)

  useEffect(() => {
    if (user === null) {
      dispatch(profileThunk())
        .unwrap()
        .catch(() => navigate(PAGE_ROUTES_PUBLIC.SIGN_IN))
    }
  }, [])

  return (
    <>
      <Header type={RouteEnum.PRIVATE} />
      <Content type={RouteEnum.PRIVATE}>
        {login.isLoading ? <div>Loading ...</div> : <Outlet />}
      </Content>
    </>
  )
}

export default memo(LayoutPrivate)
