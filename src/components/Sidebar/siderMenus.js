import { 
  DashboardOutlined, 
  ExceptionOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import routesDictionary from '../../routes/routesDict';

export const defaultMenus = (rol) => {
  if (rol === '2') {
    return [
      {
        title: routesDictionary.dashboard.title,
        key: routesDictionary.dashboard.router,
        redirection: routesDictionary.dashboard.router,
        name: routesDictionary.dashboard.moduleName,
        icon: <DashboardOutlined />,
      },
      {
        title: routesDictionary.claims.title,
        key: routesDictionary.claims.router,
        redirection: routesDictionary.claims.router,
        name: routesDictionary.claims.moduleName,
        icon: <ExceptionOutlined />,
      }
    ];
  }
  if (rol === '3' || rol === '4') {
    return [
      {
        title: routesDictionary.dashboard.title,
        key: routesDictionary.dashboard.router,
        redirection: routesDictionary.dashboard.router,
        name: routesDictionary.dashboard.moduleName,
        icon: <DashboardOutlined />,
      },
      {
        title: routesDictionary.claims.title,
        key: routesDictionary.claims.router,
        redirection: routesDictionary.claims.router,
        name: routesDictionary.claims.moduleName,
        icon: <ExceptionOutlined />,
      }
    ];
  }
  if (rol === '1') {
    return [
      {
        title: routesDictionary.claims.title,
        key: routesDictionary.claims.router,
        redirection: routesDictionary.claims.router,
        name: routesDictionary.claims.moduleName,
        icon: <ExceptionOutlined />,
      },
      {
        title: routesDictionary.account.title,
        key: routesDictionary.account.router,
        redirection: routesDictionary.account.router,
        name: routesDictionary.account.moduleName,
        icon: <UserOutlined />,
      }
    ];
  }
  return [];
};

export const footerMenus = [
  {
    title: 'Cerrar sesión',
    key: 'logout',
    redirection: 'logout',
    name: routesDictionary.login.moduleName,
    icon: <LogoutOutlined />,
  }
];