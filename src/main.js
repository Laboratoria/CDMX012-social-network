/* eslint-disable import/no-cycle */
import { login } from './components/logIn.js';
import { signup } from './components/signUp.js';
import { home } from './components/home.js';

const rootDiv = document.getElementById('globalContainer');

const routes = {
  '/': login,
  '/signup': signup,
  '/home': home,
};

// To navigate in diferent pathnames
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

window.onpopstate = () => {
  rootDiv.appendChild(routes[window.location.pathname]());
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component());
