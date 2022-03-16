/* eslint-disable import/no-cycle */
import { landingPage } from './pages/landing-page.js';
import { signUpPage } from './pages/sign-up.js';
import { signInPage } from './pages/sign-in.js';
import { addInfoPage } from './pages/add-info.js';
import { feed } from './pages/feed.js';

const routes = {
  '/': landingPage,
  '/sign-up': signUpPage,
  '/sign-in': signInPage,
  '/add-info': addInfoPage,
  '/home': feed,
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
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(component());
};

window.onload = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(component());
};
