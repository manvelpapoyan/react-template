import { IUserModel } from '@types/model/user.model'

export interface IAuthState {
  accessToken: string
  refreshToken: string
  errors: any
  login: {
    isLoading: boolean
    error: string
  }
  register: {
    isLoading: boolean
    error: string
  }
  user: IUserModel | null
}

export interface ILoginPayload {
  email: string
  password: string
}
export interface IRegisterPayload {
  email: string
  username: string
  phone: string
  password: string
  confirmPassword: string
}

export interface ILoginResponse {
  accessToken: string
  refreshToken: string
}

export interface IUpdatePassword {
  current: string
  new: string
  confirm: string
}
