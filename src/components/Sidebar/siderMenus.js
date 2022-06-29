import { 
  DashboardOutlined, ThunderboltOutlined, 
  ExceptionOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import routesDictionary from '../../routes/routesDict';

export const defaultMenus = (rol) => {
  if (rol === 'administrador') {
    return [
      {
        title: routesDictionary.dashboard.title,
        key: routesDictionary.dashboard.router,
        redirection: routesDictionary.dashboard.router,
        name: routesDictionary.dashboard.moduleName,
        icon: <DashboardOutlined />,
      },
      {
        title: routesDictionary.supplies.title,
        key: routesDictionary.supplies.router,
        redirection: routesDictionary.supplies.router,
        name: routesDictionary.supplies.moduleName,
        icon: <ThunderboltOutlined />,
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
  if (rol === 'tecnico') {
    return [
      {
        title: routesDictionary.dashboard.title,
        key: routesDictionary.dashboard.router,
        redirection: routesDictionary.dashboard.router,
        name: routesDictionary.dashboard.moduleName,
        icon: <DashboardOutlined />,
      },
      {
        title: routesDictionary.supplies.title,
        key: routesDictionary.supplies.router,
        redirection: routesDictionary.supplies.router,
        name: routesDictionary.supplies.moduleName,
        icon: <ThunderboltOutlined />,
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
  if (rol === 'usuario') {
    return [
      {
        title: routesDictionary.claims.title,
        key: routesDictionary.claims.router,
        redirection: routesDictionary.claims.router,
        name: routesDictionary.claims.moduleName,
        icon: <ExceptionOutlined />,
      }
    ];
  }
  return [];
};

export const footerMenus = [
  {
    title: 'Cerrar sesión',
    key: routesDictionary.login.router,
    redirection: routesDictionary.login.router,
    name: routesDictionary.login.moduleName,
    icon: <LogoutOutlined />,
  }
];