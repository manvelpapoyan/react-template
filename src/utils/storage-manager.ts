import { StorageKeysEnum } from './constants'

class StorageManager {
  static setItem = (key: StorageKeysEnum, data: any, storageType?: 'local' | 'session') => {
    try {
      const serializedState = JSON.stringify(data)
      const storage =
        storageType === 'local' || storageType === undefined ? localStorage : sessionStorage

      storage.setItem(key, serializedState)
    } catch {
      // ignore write errors
    }
  }

  static setString = (key: StorageKeysEnum, value: string, storageType?: 'local' | 'session') => {
    const storage =
      storageType === 'local' || storageType === undefined ? localStorage : sessionStorage

    storage.setItem(key, value)
  }

  static getString = (key: StorageKeysEnum, storageType?: 'local' | 'session') => {
    const storage =
      storageType === 'local' || storageType === undefined ? localStorage : sessionStorage

    return storage.getItem(key)
  }

  static getItem = (key: StorageKeysEnum, storageType?: 'local' | 'session') => {
    try {
      const storage =
        storageType === 'local' || storageType === undefined ? localStorage : sessionStorage

      const serializedState = storage.getItem(key)

      if (serializedState === null) {
        return
      }

      // eslint-disable-next-line consistent-return
      return JSON.parse(serializedState)
    } catch (err) {
      // ignore write errors
    }
  }

  static removeItem = (key: StorageKeysEnum, storageType?: 'local' | 'session') => {
    const storage =
      storageType === 'local' || storageType === undefined ? localStorage : sessionStorage

    storage.removeItem(key)
  }

  static clearItems = (storageType?: 'local' | 'session') => {
    const storage = storageType === 'local' ? localStorage : sessionStorage

    storage.clear()
  }
}

export default StorageManager
