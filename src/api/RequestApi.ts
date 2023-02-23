import { API_URL } from '@configs'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { StorageKeysEnum } from '@utils/constants'
import StorageManager from '@utils/storage-manager'

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500
}

const headers: Readonly<Record<string, string | boolean>> = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache'
}

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const storage = StorageManager.getString(StorageKeysEnum.REMEMBER_ME, 'local') as
      | 'local'
      | 'session'

    const token = StorageManager.getString(StorageKeysEnum.ACCESS_TOKEN, storage)

    if (token != null) {
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  } catch (error: any) {
    throw new Error(error)
  }
}

const baseURL = `${API_URL}`

class RequestApi {
  private instance: AxiosInstance | null = null

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp()
  }

  initHttp() {
    const http = axios.create({
      baseURL,
      responseType: 'json' as const,
      withCredentials: false,
      headers
    })

    // @ts-ignore
    http.interceptors.request.use(injectToken, (error) => Promise.reject(error))

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error

        return RequestApi.handleError(response)
      }
    )

    this.instance = http

    return http
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config)
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config)
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config)
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config)
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.delete<T, R>(url, config)
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private static handleError = (error: any) => {
    console.log('Error in Api', error)

    // const { status = null } = error;
    const status = error?.status

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break
      }

      case StatusCode.Forbidden: {
        // Handle Forbidden
        break
      }

      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        break
      }

      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break
      }

      default:
        null
    }

    return Promise.reject(error)
  }
}

export const http = new RequestApi()
