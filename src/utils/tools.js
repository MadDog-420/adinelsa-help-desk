import { message } from 'antd';
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

export const getData = (loading, setLoading, callback, thenCallback) => {
  if (loading) {
    fetch(callback)
      .then((response) => response.json())
      .then((data) => {
        thenCallback(data);
        setLoading(false);
      }).catch(() => message.error('Error de conexión'));
  }
};

export const transformToOptions = (data, labelName, valueName) => {
  const typeList = [];
  data.forEach(item => {
    typeList.push({ label: item[labelName], value: item[valueName] })
  });
  return typeList;
}