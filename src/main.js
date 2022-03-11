// Este es el punto de entrada de tu aplicacion

import { home } from './lib/home.js';
import { login } from './lib/login.js';
import { register } from './lib/register.js';

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];
const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};
window.onNavigate = onNavigate;
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
