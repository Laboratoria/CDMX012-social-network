/* eslint-disable semi */
/* eslint-disable max-len */
/* eslint-disable dot-notation */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import { welcome } from './components/welcome.js';
import { register } from './components/register.js';
import { login } from './components/login.js';
import { home } from './components/home.js';

// SPA
const rootDiv = document.getElementById('root');

const routes = {
  '/': welcome,
  '/register': register,
  '/login': login,
  '/home': home,
};

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
};

window.onNavigate = onNavigate;
window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

const component = routes[window.location.pathname];

rootDiv.appendChild(component());
