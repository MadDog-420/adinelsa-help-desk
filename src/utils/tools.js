import { message } from 'antd';
import {
  API_URL,
  AUTH_TOKEN, EXP_TOKEN, REFRESH_TOKEN,
} from '../settings/constants';

export function getAuthTokenName() {
  return AUTH_TOKEN;
}

export function setAuthToken(token) {
  localStorage.setItem(AUTH_TOKEN, token);
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
  setLogin(false);
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

export const transformToOptions = (data, labelName, valueName, other) => {
  const typeList = [];
  data.forEach(item => {
    const object = { label: item[labelName], value: item[valueName], other: item[other] };
    if (other) {
      object[other] = item[other];
    }
    typeList.push(object)
  });
  return typeList;
}