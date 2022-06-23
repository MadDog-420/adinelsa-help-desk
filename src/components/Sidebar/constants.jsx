import { defaultMenus, footerMenus } from './siderMenus';

export const getItem = (label, key, icon, children, type, className) => ({
    key,
    icon,
    children,
    label,
    type,
    className,
  });

export const menuItems = (rol) => defaultMenus(rol).map((menu) => (
  getItem(menu.title, menu.redirection, menu.icon)
));

export const footerItems = footerMenus.map((menu) => (
  getItem(menu.title, menu.redirection, menu.icon)
));