/* eslint-disable import/no-cycle */
import { signIn, loginGoogle } from '../lib/firebase.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const login = () => {
  const containerLoginAll = document.createElement('section');

  const arrowBackLogin = document.createElement('img');
  arrowBackLogin.setAttribute('src', 'img/Arrow.png');
  arrowBackLogin.setAttribute('class', 'arrowBack');

  const containerLogin = document.createElement('div');
  containerLogin.setAttribute('class', 'containerLogin');

  const containerInputLogin = document.createElement('div');
  containerInputLogin.setAttribute('class', 'containerInputR');

  const logo = document.createElement('img');
  logo.setAttribute('class', 'logo');
  logo.setAttribute('src', 'img/logoSize.png');

  const loginEmail = document.createElement('input');
  loginEmail.setAttribute('class', 'register');
  loginEmail.setAttribute('id', 'loginEmail');
  loginEmail.setAttribute('type', 'text');
  loginEmail.setAttribute('placeholder', 'Ingresa tu correo');
  loginEmail.setAttribute('autocomplete', 'off');

  const loginPass = document.createElement('input');
  loginPass.setAttribute('class', 'register');
  loginPass.setAttribute('id', 'loginPass');
  loginPass.setAttribute('type', 'password');
  loginPass.setAttribute('placeholder', 'Ingresa tu contraseña');
  loginPass.setAttribute('autocomplete', 'off');
  const imgMaskify = document.createElement('img');
  imgMaskify.setAttribute('src', 'img/maskify.png');
  imgMaskify.setAttribute('id', 'imgMaskify');

  const loginButton = document.createElement('button');
  loginButton.setAttribute('class', 'registerButton');
  loginButton.setAttribute('id', 'loginButton');
  loginButton.textContent = 'Login';

  const buttonGmail = document.createElement('button');
  buttonGmail.setAttribute('class', 'button');
  buttonGmail.setAttribute('id', 'loginGoogle');
  buttonGmail.textContent = 'Inicia sesión con Gmail';

  containerLogin.appendChild(arrowBackLogin);
  containerInputLogin.appendChild(loginEmail);
  containerInputLogin.appendChild(loginPass);
  containerInputLogin.appendChild(loginButton);
  containerInputLogin.appendChild(buttonGmail);
  containerInputLogin.appendChild(imgMaskify);


  containerLogin.appendChild(logo);
  containerLogin.appendChild(containerInputLogin);
  containerLoginAll.appendChild(containerLogin);
  arrowBackLogin.addEventListener('click', () => {
    onNavigate('/');
  });
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const loginMail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPass').value;
    console.log(loginEmail, loginPass);
    signIn(loginMail, loginPassword);
  });
  buttonGmail.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle();
  });
  imgMaskify.addEventListener('click', (e) => {
    e.preventDefault();
    const passWord = document.getElementById('loginPass');
    if (passWord.type === 'password') {
      passWord.type = 'text';
    } else {
      passWord.type = 'password';
    }
  });
  return containerLogin;
};