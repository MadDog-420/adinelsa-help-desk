import {
  API_URL,
  AUTH_TOKEN, EXP_TOKEN, REFRESH_TOKEN,
} from '../settings/constants';

export function getAuthTokenName() {
  return AUTH_TOKEN;
}

export function getRefreshTokenName() {
  return REFRESH_TOKEN;
}

export function getExpirationTokenName() {
  return EXP_TOKEN;
}

export function isNull(value) {
    return value === null;
}

export const logout = (setLogin) => {
  localStorage.removeItem(getAuthTokenName());
  localStorage.removeItem(getRefreshTokenName());
  localStorage.removeItem(getExpirationTokenName());
  setLogin('');
};

export const apiUrl = API_URL.slice(0, -1);