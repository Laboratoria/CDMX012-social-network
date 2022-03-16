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
const registerButton = document.getElementById('registerButton');
registerButton.addEventListener('click', (e) => {
  e.preventDefault();
  const userMail = document.getElementById('mail').value;
  const userName = document.getElementById('user').value;
  const userPassword = document.getElementById('password').value;
  const userArea = document.getElementById('area').value;
  console.log(userMail, userName, userPassword, userArea);
});
