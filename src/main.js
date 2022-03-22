/* eslint-disable import/no-cycle */
// Este es el punto de entrada de tu aplicacion

import { home } from './components/home.js';
import { login } from './components/login.js';
import { register } from './components/register.js';
import { feed } from './components/feed.js'; //

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
  '/feed': feed,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
  // whenRoute(pathname);
};
window.onNavigate = onNavigate;
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
