import { createBrowserRouter } from 'react-router-dom'
import { Forgot, SignIn, Home, Test } from '@pages'

import { RouteEnum } from '@appTypes/enums/global'
import LayoutPrivate from '@layout/Private'
import LayoutPublic from '@layout/Public'
import { ErrorBoundary } from '@components'
import { PAGE_ROUTES_PRIVATE, PAGE_ROUTES_PUBLIC } from '@appTypes/enums/pages'

const privateRoutes = [
  {
    path: PAGE_ROUTES_PRIVATE.HOME,
    type: RouteEnum.PRIVATE,
    element: <Home />
  },
  {
    path: PAGE_ROUTES_PRIVATE.TEST,
    type: RouteEnum.PRIVATE,
    element: <Test />
  }
]

const publicRoutes = [
  {
    path: PAGE_ROUTES_PUBLIC.SIGN_IN,
    type: RouteEnum.PUBLIC,
    element: <SignIn />
  },
  {
    path: PAGE_ROUTES_PUBLIC.FORGOT_PASSWORD,
    type: RouteEnum.PUBLIC,
    element: <Forgot />
  }
]

export const router = () => {
  const router = createBrowserRouter([
    {
      element: <LayoutPrivate />,
      loader: async () => <div>Loader</div>,
      children: privateRoutes,
      errorElement: <ErrorBoundary />
    },
    {
      element: <LayoutPublic />,
      loader: async () => <div>Loader</div>,
      children: publicRoutes,
      errorElement: <ErrorBoundary />
    }
  ])

  return router
}
