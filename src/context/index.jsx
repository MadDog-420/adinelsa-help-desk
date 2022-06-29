import {
  createContext, useEffect, useReducer, useState,
} from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { getAuthTokenName, logout } from '../utils/tools';
import userData from './profile-response.json';

const initialState = {
  me: {
    userInformation: {
      rol: undefined,
    },
  },
};

export const AppContext = createContext({
  state: initialState,
});

const AppContextProvider = (props) => {
  const { children, setLoginState, setRol } = props;
  const authToken = localStorage.getItem(getAuthTokenName());

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (loading) {
      setData(userData.data);
      setRol(userData.data.rol);
      setLoading(false);
      setError(false);
    }
  }, [loading, setRol]);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'default':
      case 'clearInfo':
        return initialState;
      case 'updateInfo':
        return { me: action.data.me };
      case 'refetch':
        return state;
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (error) {
      logout(setLoginState);
    } else if (data) {
      dispatch({
        type: 'updateInfo',
        data: { me: { userInformation: data } },
      });
    }
  }, [data, error, authToken, setLoginState]);

  if (loading || !data) {
    return (
    <div className="vh-100 d-flex"><Spin className="m-auto" size="large" /></div>
    );
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ state, dispatch }}>
      { children }
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  setLoginState: PropTypes.func.isRequired,
  setRol: PropTypes.func.isRequired,
};

export default AppContextProvider;