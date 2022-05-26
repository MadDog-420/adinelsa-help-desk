import routesDictionary from "./routesDict";
import asyncComponent from './../HOC/AsyncComponent/index';

const Dashboard = asyncComponent(() => import('../views/Dashboard'));
const Supplies = asyncComponent(() => import('../views/Supplies'));
const Contact = asyncComponent(() => import('../views/Contact'));
const Complains = asyncComponent(() => import('../views/Complains'));

const routes = [
    {
        path: routesDictionary.dashboard.router,
        component: Dashboard,
        title: routesDictionary.dashboard.title,
        name: routesDictionary.dashboard.moduleName,
    },
    {
        path: routesDictionary.supplies.router,
        component: Supplies,
        title: routesDictionary.supplies.title,
        name: routesDictionary.supplies.moduleName,
    },
    {
        path: routesDictionary.contact.router,
        component: Contact,
        title: routesDictionary.contact.title,
        name: routesDictionary.contact.moduleName,
    },
    {
        path: routesDictionary.claims.router,
        component: Complains,
        title: routesDictionary.claims.title,
        name: routesDictionary.claims.moduleName,
    }
];

export default routes;