import { defaultMenus } from './siderMenus';

export const getItem = (label, key, icon, children, type, className) => ({
    key,
    icon,
    children,
    label,
    type,
    className,
  });

export const menuItems = defaultMenus.map((menu) => (
  getItem(menu.title, menu.redirection, menu.icon)
));