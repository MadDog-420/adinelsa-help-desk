export const AUTH_TOKEN = '';
export const REFRESH_TOKEN = 'refreshToken';
export const EXP_TOKEN = 'expirationToken';

export const BACKEND_URL = typeof process.env.REACT_APP_DEV_BACKEND_URL !== 'undefined'
  ? process.env.REACT_APP_DEV_BACKEND_URL : false;
/** global: BACKEND_URL */

export const API_URL = `${BACKEND_URL}`;