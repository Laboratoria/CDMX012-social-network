/* eslint-disable import/no-cycle */
import { signIn, loginGoogle } from '../lib/firebase.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

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
  const messageEmail = document.createElement('span');
  messageEmail.setAttribute('class', 'invalidMessage displayNone');
  messageEmail.setAttribute('id', 'messageEmail');
  messageEmail.textContent = 'Ingresa un correo valido';

  const containerPassword = document.createElement('section');
  containerPassword.setAttribute('class', 'containerPassCSS');

  const loginPass = document.createElement('input');
  loginPass.setAttribute('class', 'register');
  loginPass.setAttribute('id', 'loginPass');
  loginPass.setAttribute('type', 'password');
  loginPass.setAttribute('placeholder', 'Ingresa tu contraseña');
  loginPass.setAttribute('autocomplete', 'off');
  const buttonMaskify = document.createElement('img');
  buttonMaskify.setAttribute('src', 'img/maskify.png');
  buttonMaskify.setAttribute('id', 'maskify');

  const messagePassword = document.createElement('span');
  messagePassword.setAttribute('class', 'invalidMessage displayNone');
  messagePassword.setAttribute('id', 'messagePassword');
  messagePassword.textContent = 'La contraseña debe contener al menos 6 caracteres';

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
  containerInputLogin.appendChild(messageEmail);
  containerInputLogin.appendChild(containerPassword);
  containerPassword.appendChild(loginPass);
  containerPassword.appendChild(buttonMaskify);
  containerInputLogin.appendChild(messagePassword);
  containerInputLogin.appendChild(loginButton);
  containerInputLogin.appendChild(buttonGmail);


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

    if (validateEmail(loginMail)) {
      messageEmail.classList.add('displayNone');
    } else if (!validateEmail(loginMail)) {
      messageEmail.classList.remove('displayNone');
    }

    if (loginPassword.length >= 6) {
      messagePassword.classList.add('displayNone');
    } else {
      messagePassword.classList.remove('displayNone');
    }

    if (loginMail !== '' && loginPassword !== '') {
      signIn(loginMail, loginPassword);
    } else {
      if (loginMail === '') document.getElementById('loginEmail').classList.add('invalidInput');
      else { document.getElementById('loginEmail').classList.remove('invalidInput'); }
      if (loginPassword === '') document.getElementById('loginPass').classList.add('invalidInput');
      else { document.getElementById('loginPass').classList.remove('invalidInput'); }
    }
  });

  buttonGmail.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle();
  });
  buttonMaskify.addEventListener('click', (e) => {
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
