// eslint-disable-next-line import/no-cycle
import { landingPage } from './pages/landing-page.js';
import { signUpPage } from './pages/sign-up.js';
import { signInPage } from './pages/sign-in.js';

const routes = {
  '/': landingPage,
  '/sign-up': signUpPage,
  '/sign-in': signInPage,
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

rootDiv.appendChild(component());
