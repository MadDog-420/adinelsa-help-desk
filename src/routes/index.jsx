import PropTypes from 'prop-types';
import HeaderComponent from './../components/Header/index';

const routeTypes = {
  public: (props) => {
    const {
      renderProps, component: Component,
      setLoginState,
    } = props;

    return <Component setLoginState={setLoginState} {...renderProps} />;
  },
  private: (props) => {
    const {
      renderProps, component: Component,
      isLogin = true, setLoginState, rol,
    } = props;

    if (!isLogin) {
      return (null);
    }

    return (
      <HeaderComponent rol={rol}>
        <Component setLoginState={setLoginState} {...renderProps} />
      </HeaderComponent>
    );
  },
};

const MakeRouteWithSubRoutes = (props) => {
  const {
    path, title, rol,
    component: Component, type, login, setLoginState, userInformation, groups, setGroups,
  } = props;
  document.title = title;
  return (
    routeTypes[type]({
      component: Component,
      path,
      type,
      title,
      login,
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
  rol: PropTypes.string.isRequired,
};

MakeRouteWithSubRoutes.defaultProps = {
  exact: false,
  type: 'private',
  isLogin: false,
  name: '',
};

export default MakeRouteWithSubRoutes;