import PropTypes from 'prop-types';
import HeaderComponent from './../components/Header/index';
import { Navigate } from "react-router-dom";
import routesDictionary from './routesDict';

const routeTypes = {
  public: (props) => {
    const {
      renderProps, component: Component,
      isLogin, setLoginState,
    } = props;

    if (isLogin) {
      return (
        <Navigate to={'/'} replace={true} />
      );
    }

    return <Component setLoginState={setLoginState} {...renderProps} />;
  },
  private: (props) => {
    const {
      renderProps, component: Component,
      isLogin, setLoginState, rol,
    } = props;

    if (!isLogin) {
      return (
        <Navigate to={routesDictionary.login.router} replace={true} />
      );
    }

    return (
      <HeaderComponent rol={rol} setLoginState={setLoginState}>
        <Component setLoginState={setLoginState} {...renderProps} />
      </HeaderComponent>
    );
  },
};

const MakeRouteWithSubRoutes = (props) => {
  const {
    path, title, rol,
    component: Component, type, isLogin, setLoginState, userInformation, groups, setGroups,
  } = props;
  document.title = title;
  return (
    routeTypes[type]({
      component: Component,
      path,
      type,
      title,
      isLogin,
      setLoginState,
      userInformation,
      groups,
      setGroups,
      rol,
    })
  );
};

MakeRouteWithSubRoutes.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
  exact: PropTypes.bool,
  type: PropTypes.string,
  isLogin: PropTypes.bool,
  setLoginState: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  rol: PropTypes.string,
};

MakeRouteWithSubRoutes.defaultProps = {
  exact: false,
  type: 'private',
  isLogin: false,
  name: '',
  rol: undefined,
};

export default MakeRouteWithSubRoutes;