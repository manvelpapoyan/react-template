import { createAsyncThunk } from '@reduxjs/toolkit'

import { ILoginPayload, IUpdatePassword, IRegisterPayload } from '@store/features/auth/auth.types'
import AuthService from '@services/AuthService'
import StorageManager from '@utils/storage-manager'
import { StorageKeysEnum } from '@utils/constants'

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (payload: ILoginPayload, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(payload)

      StorageManager.setString(StorageKeysEnum.ACCESS_TOKEN, response.data.data.accessToken)
      StorageManager.setString(StorageKeysEnum.REFRESH_TOKEN, response.data.data.refreshToken)

      const { data: user } = await AuthService.getProfile()
      StorageManager.setItem(StorageKeysEnum.USER, user)

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
