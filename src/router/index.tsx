import { createBrowserRouter } from 'react-router-dom'
import { Forgot, SignIn, Home } from '@pages'

import { RouteEnum } from '@appTypes/enums/global'
import LayoutPrivate from '@layout/Private'
import LayoutPublic from '@layout/Public'
import { ErrorBoundary } from '@components'

const privateRoutes = [
  {
    path: '/',
    type: RouteEnum.PRIVATE,
    element: <Home />
  }
]

const publicRoutes = [
  {
    path: '/auth/sign-in',
    type: RouteEnum.PUBLIC,
    element: <SignIn />
  },
  {
    path: '/auth/forgot-password',
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
