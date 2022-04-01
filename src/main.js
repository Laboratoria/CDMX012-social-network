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

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
  // whenRoute(pathname);
};
window.onNavigate = onNavigate;
window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};
const components = routes[window.location.pathname];
rootDiv.appendChild(components());
