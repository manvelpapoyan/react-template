import { createAsyncThunk } from '@reduxjs/toolkit'

import { ILoginPayload, IUpdatePassword, IRegisterPayload } from '@store/features/auth/auth.types'
import AuthService from '@services/AuthService'
import StorageManager from '@utils/storage-manager'
import { StorageKeysEnum } from '@utils/constants'

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (payload: ILoginPayload, { rejectWithValue }) => {
    try {
      const { rememberMe, ...payloadData } = payload

      const whereSave = rememberMe ? 'session' : 'local'
      StorageManager.setString(StorageKeysEnum.REMEMBER_ME, whereSave, 'local')

      const response = await AuthService.login(payloadData)

      StorageManager.setString(
        StorageKeysEnum.ACCESS_TOKEN,
        response.data.data.accessToken,
        whereSave
      )
      StorageManager.setString(
        StorageKeysEnum.REFRESH_TOKEN,
        response.data.data.accessToken,
        whereSave
      )

      const { data: user } = await AuthService.getProfile()

      return {
        ...response.data.data,
        user
      }
    } catch (error: any) {
      return rejectWithValue(error.data.details[0].message as string)
    }
  }
)

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (payload: IRegisterPayload, { rejectWithValue, dispatch }) => {
    // try {
    //   await AuthService.register(payload)
    //   const { email, password } = payload
    //   dispatch(
    //     loginThunk({
    //       email,
    //       password
    //     })
    //   )
    // } catch (error: any) {
    //   return rejectWithValue(error.data.details[0].message as string)
    // }
  }
)

export const logoutThunk = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  // try {
  //   await AuthService.logout()
  //   StorageManager.removeItem(StorageKeysEnum.ACCESS_TOKEN)
  //   StorageManager.removeItem(StorageKeysEnum.REFRESH_TOKEN)
  //   StorageManager.removeItem(StorageKeysEnum.USER)
  // } catch (error: any) {
  //   return rejectWithValue(error.message as string)
  // }
})

export const updatePasswordThunk = createAsyncThunk(
  'auth/password/update',
  async (data: IUpdatePassword, { rejectWithValue }) => {
    // try {
    //   return await AuthService.changePassword(data)
    // } catch (error: any) {
    //   return rejectWithValue(error)
    // }
  }
)

export const profileThunk = createAsyncThunk('auth/profile', async (_, { rejectWithValue }) => {
  try {
    const { data: user } = await AuthService.getProfile()

    return {
      user
    }
  } catch (error: any) {
    return rejectWithValue(error.data.details[0].message as string)
  }
})
