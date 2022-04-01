<<<<<<< HEAD
/* eslint-disable spaced-comment */
=======
>>>>>>> ea2c9b9bc4987d72b1f8654e745a37b9a8094fc5
/* eslint-disable semi */
/* eslint-disable max-len */
/* eslint-disable dot-notation */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import { welcome } from './components/welcome.js';
import { register } from './components/register.js';
import { login } from './components/login.js';
<<<<<<< HEAD
//import { saveRegisterFormData } from './lib/firebase.js';
=======
import { home } from './components/home.js';

>>>>>>> ea2c9b9bc4987d72b1f8654e745a37b9a8094fc5
// SPA
const rootDiv = document.getElementById('root');

const routes = {
  '/': welcome,
  '/register': register,
  '/login': login,
  '/home': home,
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

window.onNavigate = onNavigate;
window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

const component = routes[window.location.pathname];

rootDiv.appendChild(component());

<<<<<<< HEAD
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
=======
// window.addEventListener('DOMContentLoaded', () => {

// });
>>>>>>> ea2c9b9bc4987d72b1f8654e745a37b9a8094fc5
