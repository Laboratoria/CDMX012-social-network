// Este es el punto de entrada de tu aplicacion

import { home } from './components/home.js';
// eslint-disable-next-line import/no-cycle
import { login } from './components/login.js';
// eslint-disable-next-line import/no-cycle
import { register } from './components/register.js';
import { feed } from './components/feed.js'; //
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js"; //viene desde una CDN y no de lib

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
