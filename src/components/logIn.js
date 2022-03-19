/* eslint-disable import/no-cycle */
// // eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { loginUserWithEmail, LoginUserWithGoogle, loginUserWithTwitter } from '../firebase.js';

export const login = () => {
  // elements
  const globalContainer = document.getElementById('globalContainer');
  const globalLogInDiv = document.createElement('div');
  const header = document.createElement('header');
  const imgLogo = document.createElement('img');
  const divLogo = document.createElement('div');
  const pLogo = document.createElement('p');
  const baseLogin = document.createElement('div');
  const loginEmail = document.createElement('input');
  const loginPassword = document.createElement('input');
  const pForgotPassword = document.createElement('p');
  const buttonLogin = document.createElement('button');
  const divLoginWith = document.createElement('div');
  const loginWithP = document.createElement('p');
  const loginWithGoogle = document.createElement('button');
  const loginWithTwitter = document.createElement('button');
  const errorMessage = document.createElement('div');
  const divSignUp = document.createElement('div');
  const pSignUp = document.createElement('p');

  // attributes
  imgLogo.setAttribute('src', './img/logosmall.png');
  pLogo.setAttribute('class', 'pLogo');
  divLogo.setAttribute('id', 'divLogo');
  globalLogInDiv.setAttribute('class', 'globalLogInDiv');
  baseLogin.setAttribute('class', 'baseLogin');
  loginEmail.setAttribute('type', 'text');
  loginEmail.setAttribute('placeholder', 'Email');
  loginEmail.setAttribute('id', 'loginEmail');
  loginPassword.setAttribute('type', 'password');
  loginPassword.setAttribute('placeholder', 'Password');
  loginPassword.setAttribute('id', 'loginPassword');
  pForgotPassword.setAttribute('class', 'pForgotPassword');
  divLoginWith.setAttribute('class', 'divLoginWith');
  loginWithGoogle.setAttribute('class', 'loginWith');
  loginWithTwitter.setAttribute('class', 'loginWith');
  errorMessage.setAttribute('id', 'errorMessage');
  divSignUp.setAttribute('id', 'divSignUp');
  pSignUp.setAttribute('class', 'pSignUp');

  // innerText
  buttonLogin.textContent = 'Login';
  pForgotPassword.innerText = 'Forgot password?';
  loginWithP.innerText = 'Or login with';
  divSignUp.innerText = 'You don’t have an account??';
  pSignUp.innerText = 'Sign up';
  loginWithGoogle.innerText = 'Google';
  loginWithTwitter.innerText = 'Twitter';

  // append
  globalContainer.appendChild(globalLogInDiv);
  globalLogInDiv.appendChild(header);
  globalLogInDiv.appendChild(baseLogin);
  header.appendChild(divLogo);
  header.appendChild(imgLogo);
  divLogo.appendChild(pLogo);
  baseLogin.appendChild(loginEmail);
  baseLogin.appendChild(loginPassword);
  baseLogin.appendChild(pForgotPassword);
  baseLogin.appendChild(buttonLogin);
  baseLogin.appendChild(divLoginWith);
  baseLogin.appendChild(errorMessage);
  baseLogin.appendChild(divSignUp);
  divSignUp.appendChild(pSignUp);
  divLoginWith.appendChild(loginWithP);
  divLoginWith.appendChild(loginWithGoogle);
  divLoginWith.appendChild(loginWithTwitter);

  buttonLogin.addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    loginUserWithEmail(email, password).then((userCredential) => {
      if (userCredential) {
        onNavigate('/home');
      } else {
        errorMessage.innerText = 'Invalid email or password';
      }
    });
  });

  loginWithGoogle.addEventListener('click', () => {
    LoginUserWithGoogle().then((result) => {
      if (result) {
        onNavigate('/home');
      } else {
        errorMessage.innerText = 'You must choose a Google account';
      }
    });
  });

  loginWithTwitter.addEventListener('click', () => {
    loginUserWithTwitter().then((result) => {
      if (result) {
        onNavigate('/home');
      } else {
        errorMessage.innerText = 'You must choose a Twitter account';
      }
    });
  });

  divSignUp.addEventListener('click', () => {
    onNavigate('/signup');
  });
  return buttonLogin;
};
