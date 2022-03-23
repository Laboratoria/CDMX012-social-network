/* eslint-disable spaced-comment */
/* eslint-disable semi */
/* eslint-disable max-len */
/* eslint-disable dot-notation */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import { welcome } from './components/welcome.js';
import { register } from './components/register.js';
import { login } from './components/login.js';
//import { saveRegisterFormData } from './lib/firebase.js';
// SPA
const rootDiv = document.getElementById('root');

const routes = {
  '/': welcome,
  '/register': register,
  '/login': login,
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

window.onpopstate = () => {
  rootDiv.appendChild(routes[window.location.pathname]());
};

const component = routes[window.location.pathname];

rootDiv.appendChild(component());

// Information to register a new Acc************************************************************************
// window.addEventListener('DOMContentLoaded', () => {

// });
// const registerForm = document.getElementById('registerForm');

// registerForm.addEventListener('submit', (e) => {
//   e.preventDefault()

//   const usernameRegister = registerForm['username'];
//   const emailRegister = registerForm['email'];
//   const passwordRegister = registerForm['password'];
//   saveRegisterFormData(usernameRegister.value, emailRegister.value, passwordRegister.value);
//   registerForm.reset();
// });
