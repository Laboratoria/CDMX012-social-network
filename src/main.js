// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from './lib/index.js';

myFunction(); */
import { login } from './login.js';
import { muro } from './muro.js';
import { registro } from './registro.js';

const routes = {
  '/': login,
  '/registro': registro,
  '/muro': muro,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

function onNavigate(pathname) {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
}
window.onNavigate = onNavigate;

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
