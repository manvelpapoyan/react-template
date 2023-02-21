import { configureStore } from '@reduxjs/toolkit'

import authReducer from '@store/features/auth/auth.slice'

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  reducer: {
    auth: authReducer
  }
})

// store.subscribe(() => {
//   const { order } = store.getState()
//   saveOrderState(order)
// })
