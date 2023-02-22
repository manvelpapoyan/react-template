export const MOBILE_DRAWER_WIDTH = 256
export const ROOM_DRAWER_WIDTH = 373
export const TOOLBAR_MIN_HEIGHT = 103

export enum ACTION_STATUSES {
  HOLD = 0,
  PENDING = 1,
  SUCCEED = 2,
  FAILED = 3
}

export enum StorageKeysEnum {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
  USER = 'user'
}

export const ErrorMessages = {
  NAME_REQUIRED: 'Name is required',
  WIDTH_REQUIRED: 'Width is required',
  HEIGHT_REQUIRED: 'Height is required',
  LENGTH_REQUIRED: 'Length is required',
  PHONE_REQUIRED: 'Phone is required',
  EMAIL_REQUIRED: 'Email is required',
  PASSWORD_REQUIRED: 'Password is required',
  CONFIRM_PASSWORD: 'You should confirm your password.',
  PASSWORDS_MATCH: 'Passwords must match.',

  MIN_CHARACTER: 'Title must be at least 3 character',
  MAX_CHARACTER: 'Title be less than 255 characters',
  MAX_VALUE: 'Max value 1000'
}
