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
