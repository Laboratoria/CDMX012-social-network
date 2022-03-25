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

// eslint-disable-next-line no-unused-vars
export const onNavigate = (pathname, mockRoutes = routes) => {
  const rootDiv = document.getElementById('root');

  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(mockRoutes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  const rootDiv = document.getElementById('root');
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(component());
};

window.onload = () => {
  const rootDiv = document.getElementById('root');
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(component());
};
