/* eslint-disable import/no-cycle */
// // eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const login = () => {
  const loginEmail = document.createElement('input');
  loginEmail.setAttribute('type', 'text');
  loginEmail.setAttribute('placeholder', 'Email');
  loginEmail.setAttribute('id', 'loginEmail');
  const loginPassword = document.createElement('input');
  loginPassword.setAttribute('type', 'password');
  loginPassword.setAttribute('placeholder', 'Password');
  loginPassword.setAttribute('id', 'loginEmail');
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Aquí iría el login';
  buttonLogin.addEventListener('click', () => {
    onNavigate('/signup');
  });
  return buttonLogin;
};
