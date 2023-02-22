import { AxiosResponse } from 'axios'
import { http } from '@api/RequestApi'

import { IUserModel } from '@appTypes/model/user.model'

import {
  ILoginResponse,
  ILoginPayload,
  IUpdatePassword,
  IRegisterPayload
} from '@store/features/auth/auth.types'

class AuthService {
  static prefix = '/auth'

  static async login(data: ILoginPayload) {
    return http.post<ILoginPayload, AxiosResponse<ILoginResponse>>(`${this.prefix}/login`, data)
  }

  static async register(data: IRegisterPayload) {
    return http.post<IRegisterPayload>(`${this.prefix}/signUp`, data)
  }

  static async getProfile() {
    return http.get<void, AxiosResponse<IUserModel>>(`${this.prefix}/profile`)
  }

  static async logout() {
    return http.post(`${this.prefix}/signOut`)
  }

  static async changePassword(data: IUpdatePassword) {
    return http.put(`${this.prefix}/password`, data)
  }
}

export default AuthService
