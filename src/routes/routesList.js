import routesDictionary from "./routesDict";
import asyncComponent from './../HOC/AsyncComponent/index';

const Login = asyncComponent(() => import('../views/Login'));
const Register = asyncComponent(() => import('../views/Login/Register'));
const Dashboard = asyncComponent(() => import('../views/Dashboard'));
const Supplies = asyncComponent(() => import('../views/Supplies'));
const Contact = asyncComponent(() => import('../views/Contact'));
const Complains = asyncComponent(() => import('../views/Complains'));
const ComplainDetails = asyncComponent(() => import('../views/Complains/ComplainDetails'));
const MyAccount = asyncComponent(() => import('../views/MyAccount'));

export const homePage = (rol) => {
  let component, title, name;
  let obj = {
    path: '/',
  };

  if (rol === 'administrador') {
    component = Dashboard;
    title = routesDictionary.dashboard.title;
    name = routesDictionary.dashboard.moduleName;
  } else {
    component = Complains;
    title = routesDictionary.claims.title;
    name = routesDictionary.claims.moduleName;
  }

  obj.component = component;
  obj.title = title;
  obj.name = name;

  return obj;
};

const moduleException = {
  administrador: [],
  tecnico: [routesDictionary.dashboard.moduleName],
  usuario: [routesDictionary.dashboard.moduleName],
};

const defaultRoutes = [
  {
    path: routesDictionary.login.router,
    component: Login,
    type: 'public',
    title: routesDictionary.login.title,
    name: routesDictionary.login.moduleName,
  },
  {
    path: routesDictionary.register.router,
    component: Register,
    type: 'public',
    title: routesDictionary.register.title,
    name: routesDictionary.register.moduleName,
  },
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
  },
  {
    path: routesDictionary.claimDetails.router,
    component: ComplainDetails,
    title: routesDictionary.claimDetails.title,
    name: routesDictionary.claimDetails.moduleName,
  },
  {
    path: routesDictionary.account.router,
    component: MyAccount,
    title: routesDictionary.account.title,
    name: routesDictionary.account.moduleName,
  },
]

const routes = (rol) => {
  if (rol) {
    const routesList = defaultRoutes.filter((item) => !moduleException[rol].includes(item.name));
    routesList.push(homePage(rol));
    return routesList;
  }
  return [];
};

export default routes;