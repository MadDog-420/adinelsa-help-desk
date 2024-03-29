import { 
  DashboardOutlined, 
  ExceptionOutlined,
  LogoutOutlined,
  UserOutlined,
  UsergroupAddOutlined,
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
      },
      {
        title: routesDictionary.userManagement.title,
        key: routesDictionary.userManagement.router,
        redirection: routesDictionary.userManagement.router,
        name: routesDictionary.userManagement.moduleName,
        icon: <UsergroupAddOutlined />,
      }
    ];
  } else {
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
    ]
  }
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