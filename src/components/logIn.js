/* eslint-disable import/no-cycle */
// // eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const login = () => {
  // elements
  const globalContainer = document.getElementById('globalContainer');
  const globalLogInDiv = document.createElement('div');
  const header = document.createElement('header');
  const imgLogo = document.createElement('img');
  const divLogo = document.createElement('div');
  const pLogo = document.createElement('p');
  const baseLogin = document.createElement('div');
  const loginUsername = document.createElement('input');
  const loginPassword = document.createElement('input');
  const pForgotPassword = document.createElement('p');
  const buttonLogin = document.createElement('button');
  const divLoginWith = document.createElement('div');
  const loginWithP = document.createElement('p');
  const loginWithGoogle = document.createElement('button');
  const loginWithTwitter = document.createElement('button');

  // attributes
  imgLogo.setAttribute('src', './img/logosmall.png');
  pLogo.setAttribute('class', 'pLogo');
  divLogo.setAttribute('id', 'divLogo');
  globalLogInDiv.setAttribute('class', 'globalLogInDiv');
  baseLogin.setAttribute('class', 'baseLogin');
  loginUsername.setAttribute('type', 'text');
  loginUsername.setAttribute('placeholder', 'Username');
  loginUsername.setAttribute('id', 'loginUsername');
  loginPassword.setAttribute('type', 'password');
  loginPassword.setAttribute('placeholder', 'Password');
  loginPassword.setAttribute('id', 'loginPassword');
  pForgotPassword.setAttribute('class', 'pForgotPassword');
  divLoginWith.setAttribute('class', 'divLoginWith');
  loginWithGoogle.setAttribute('class', 'loginWith');
  loginWithTwitter.setAttribute('class', 'loginWith');

  // innerText
  buttonLogin.textContent = 'Login';
  pForgotPassword.innerText = 'Forgot password?';
  loginWithP.innerText = 'Or login with';

  // append
  globalContainer.appendChild(globalLogInDiv);
  globalLogInDiv.appendChild(header);
  globalLogInDiv.appendChild(baseLogin);
  header.appendChild(divLogo);
  header.appendChild(imgLogo);
  divLogo.appendChild(pLogo);
  baseLogin.appendChild(loginUsername);
  baseLogin.appendChild(loginPassword);
  baseLogin.appendChild(pForgotPassword);
  baseLogin.appendChild(buttonLogin);
  baseLogin.appendChild(divLoginWith);
  divLoginWith.appendChild(loginWithP);
  divLoginWith.appendChild(loginWithGoogle);
  divLoginWith.appendChild(loginWithTwitter);

  buttonLogin.addEventListener('click', () => {
    onNavigate('/signup');
  });
  return buttonLogin;
};
