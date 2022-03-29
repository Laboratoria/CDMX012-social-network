// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from './lib/index.js';

myFunction(); */
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

// eslint-disable-next-line import/no-cycle
import { login } from './Component/login.js';
import { muro } from './Component/muro.js';
// eslint-disable-next-line import/no-cycle
import { registro } from './Component/registro.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': login,
  '/registro': registro,
  '/muro': muro,
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
// window.onNavigate = onNavigate;
window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

const component = routes[window.location.pathname];

rootDiv.appendChild(component());

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    onNavigate('/muro');
  } else {
    onNavigate('/');
  }
});
