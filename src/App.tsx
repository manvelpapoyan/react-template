import { RouterProvider } from 'react-router-dom'

import { router } from './router'
// import Button from '@components/common/Button'
// import Input from '@components/common/Input'

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router()} />
    </div>
  )
}

export default App
