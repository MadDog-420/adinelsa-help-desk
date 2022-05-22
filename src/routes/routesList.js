import routesDictionary from "./routesDict";
import asyncComponent from './../HOC/AsyncComponent/index';

const Dashboard = asyncComponent(() => import('../views/Dashboard'));

const routes = [
    {
        path: routesDictionary.dashboard.router,
        component: Dashboard,
        title: routesDictionary.dashboard.title,
        name: routesDictionary.dashboard.moduleName,
    }
];

export default routes;