import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function LayoutPublic() {
  const user = { name: 'david' }
  const navigate = useNavigate()

  useEffect(() => {
    if (user && Object.keys(user).length) {
      // redirect to Private(user) layout
      navigate('/')
    }
  }, [user])

  // ...loader

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default LayoutPublic
