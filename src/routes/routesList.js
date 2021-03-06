import routesDictionary from "./routesDict";
import asyncComponent from './../HOC/AsyncComponent/index';

const Login = asyncComponent(() => import('../views/Login'));
const Register = asyncComponent(() => import('../views/Login/Register'));
const Dashboard = asyncComponent(() => import('../views/Dashboard'));
const Contact = asyncComponent(() => import('../views/Contact'));
const Complains = asyncComponent(() => import('../views/Complains'));
const ComplainDetails = asyncComponent(() => import('../views/Complains/ComplainDetails'));
const MyAccount = asyncComponent(() => import('../views/MyAccount'));
const UserManagement = asyncComponent(() => import('../views/UserManagement'));

export const homePage = (rol) => {
  let component, title, name;
  let obj = {
    path: '/',
  };

  if (rol === '2') {
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

const moduleException = (rol) => {
  if (rol !== '2') {
    return [
      routesDictionary.dashboard.moduleName,
      routesDictionary.userManagement.moduleName,
    ];
  }
  return [];
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
  {
    path: routesDictionary.userManagement.router,
    component: UserManagement,
    title: routesDictionary.userManagement.title,
    name: routesDictionary.userManagement.moduleName,
  },
]

const routes = (rol) => {
  const routesList = defaultRoutes.filter((item) => !moduleException(rol).includes(item.name));
  routesList.push(homePage(rol));
  return routesList;
};

export default routes;