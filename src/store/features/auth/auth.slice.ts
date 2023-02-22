import { createSlice } from '@reduxjs/toolkit'

import { IAuthState } from '@store/features/auth/auth.types'
import {
  loginThunk,
  logoutThunk,
  registerThunk,
  updatePasswordThunk
} from '@store/features/auth/auth.actions'
import StorageManager from '@utils/storage-manager'
import { StorageKeysEnum } from '@utils/constants'

const initialState: IAuthState = {
  accessToken: StorageManager.getString(StorageKeysEnum.ACCESS_TOKEN) || '',
  refreshToken: StorageManager.getString(StorageKeysEnum.REFRESH_TOKEN) || '',
  errors: null,
  login: {
    isLoading: false,
    error: ''
  },
  register: {
    isLoading: false,
    error: ''
  },
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.login.error = ''
      state.register.error = ''
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(loginThunk.pending, (state) => {
        state.login.isLoading = true
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.login.isLoading = false
        state.accessToken = payload.accessToken
        state.refreshToken = payload.refreshToken
        state.user = payload.user
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.login.isLoading = false
        state.login.error = payload as string
      })
      .addCase(logoutThunk.pending, (state) => {
        state.accessToken = ''
        state.refreshToken = ''
        state.user = null
      })

      .addCase(updatePasswordThunk.rejected, (state, { payload }) => {
        console.log(55555)
        // state.errors = (payload as any).data
      })
      .addCase(registerThunk.pending, (state) => {
        console.log(66666)
        // state.register.isLoading = true
      })
      .addCase(registerThunk.fulfilled, (state) => {
        console.log(777777)
        // state.register.isLoading = false
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        console.log(88888)
        // state.register.isLoading = false
        // state.register.error = payload as string
      })
})

export const { clearErrors } = authSlice.actions

export default authSlice.reducer
