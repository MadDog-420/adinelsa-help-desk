import {
  createContext, useEffect, useReducer, useState,
} from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { getAuthTokenName, logout } from '../utils/tools';
// import userData from './profile-response.json';

export const AppContext = createContext();

const initialState = {
  me: {
    userInformation: {
      rol: undefined,
    },
  },
};

const AppContextProvider = (props) => {
  const { children, setLoginState, setRol } = props;
  const authToken = localStorage.getItem(getAuthTokenName());

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (loading && authToken && authToken !== '') {
      fetch('http://localhost:8000/api/usuario/'+authToken)
        .then((res) => res.json())
			  .then((data) => {
          setData(data[0]);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [authToken, loading, setRol]);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'default':
      case 'clearInfo':
        return initialState;
      case 'updateInfo':
        return { me: action.data.me };
      case 'refetch':
        setLoading(true);
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
      setRol(data.IdRol.toString());
      dispatch({
        type: 'updateInfo',
        data: { me: { userInformation: data } },
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, authToken]);

  if (loading) {
    return (
      <div className="w-100 vh-100 d-flex loading-context">
        <Spin className="m-auto" size="large" />
      </div>
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