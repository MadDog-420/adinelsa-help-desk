import { 
    DashboardOutlined, ThunderboltOutlined, 
    CommentOutlined, ExceptionOutlined 
} from '@ant-design/icons';
import routesDictionary from '../../routes/routesDict';

export const defaultMenus = [
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
        title: routesDictionary.contact.title,
        key: routesDictionary.contact.router,
        redirection: routesDictionary.contact.router,
        name: routesDictionary.contact.moduleName,
        icon: <CommentOutlined />,
    },
    {
        title: routesDictionary.claims.title,
        key: routesDictionary.claims.router,
        redirection: routesDictionary.claims.router,
        name: routesDictionary.claims.moduleName,
        icon: <ExceptionOutlined />,
    }
]