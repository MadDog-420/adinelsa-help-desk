import { DashboardOutlined } from '@ant-design/icons';
import routesDictionary from '../../routes/routesDict';

export const defaultMenus = [
    {
        title: 'Dashboard',
        key: routesDictionary.dashboard.router,
        redirection: routesDictionary.dashboard.router,
        name: routesDictionary.dashboard.moduleName,
        // eslint-disable-next-line react/jsx-filename-extension
        icon: <DashboardOutlined />,
    }
]