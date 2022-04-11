/* eslint-disable import/no-cycle */
import { createUserRed } from '../lib/firebase.js';

// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { saveForm } from './FireStore.js';

export function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}

export const register = () => {
  const containerAllRegister = document.createElement('section');
  const arrowBack = document.createElement('img');
  arrowBack.setAttribute('src', 'img/Arrow.png');
  arrowBack.setAttribute('class', 'arrowBack');
  const containerRegister = document.createElement('section');
  containerRegister.setAttribute('class', 'containerRegister');
  const logo = document.createElement('img');
  logo.setAttribute('class', 'logo');
  logo.setAttribute('src', 'img/logoSize.png');
  const registerText = document.createElement('section');
  registerText.setAttribute('class', 'registerText');
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Registrate con tu correo';
  registerText.appendChild(paragraph);
  const containerInputR = document.createElement('section');
  containerInputR.setAttribute('class', 'containerInputR');
  const mail = document.createElement('input');
  mail.setAttribute('class', 'register');
  mail.setAttribute('id', 'mail');
  mail.setAttribute('type', 'text');
  mail.setAttribute('placeholder', 'Ingresa tu correo');
  mail.setAttribute('autocomplete', 'off');
  const messageEmail = document.createElement('span');
  messageEmail.setAttribute('class', 'invalidMessage displayNone');
  messageEmail.setAttribute('id', 'messageEmail');
  messageEmail.textContent = 'Ingresa un correo valido';

  const user = document.createElement('input');
  user.setAttribute('class', 'register');
  user.setAttribute('id', 'user');
  user.setAttribute('type', 'text');
  user.setAttribute('placeholder', 'Ingresa tu nombre de usuaria');
  user.setAttribute('autocomplete', 'off');

  const containerPassword = document.createElement('section');
  containerPassword.setAttribute('class', 'containerPassCSS');

  const password = document.createElement('input');
  password.setAttribute('class', 'register');
  password.setAttribute('id', 'password');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Ingresa tu contraseña');
  password.setAttribute('autocomplete', 'off');

  const buttonMaskify = document.createElement('img');
  buttonMaskify.setAttribute('src', 'img/maskify.png');
  buttonMaskify.setAttribute('id', 'maskify');

  const messagePassword = document.createElement('span');
  messagePassword.setAttribute('class', 'invalidMessage displayNone');
  messagePassword.setAttribute('id', 'messagePassword');
  messagePassword.textContent = 'La contraseña debe contener al menos 6 caracteres';

  const area = document.createElement('input');
  area.setAttribute('class', 'register');
  area.setAttribute('id', 'area');
  area.setAttribute('type', 'text');
  area.setAttribute('placeholder', 'Ingresa tu area tech');
  area.setAttribute('autocomplete', 'off');
  const registerButton = document.createElement('button');
  registerButton.setAttribute('class', 'registerButton');
  registerButton.setAttribute('id', 'registerButton');
  registerButton.textContent = 'Registrarme';
  containerInputR.appendChild(mail);
  containerInputR.appendChild(messageEmail);
  containerInputR.appendChild(user);
  containerInputR.appendChild(containerPassword);
  containerPassword.appendChild(password);
  containerPassword.appendChild(buttonMaskify);
  containerInputR.appendChild(messagePassword);
  containerInputR.appendChild(area);
  containerInputR.appendChild(registerButton);
  containerRegister.appendChild(logo);
  containerRegister.appendChild(registerText);
  containerRegister.appendChild(containerInputR);
  containerAllRegister.appendChild(arrowBack);
  containerAllRegister.appendChild(containerRegister);
  arrowBack.addEventListener('click', () => {
    onNavigate('/');
  });
  buttonMaskify.addEventListener('click', () => {
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  });
  registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    const userMail = document.getElementById('mail').value;
    const userName = document.getElementById('user').value;
    const userPassword = document.getElementById('password').value;
    const userArea = document.getElementById('area').value;
    console.log(userMail, userName, userPassword, userArea, user);

    if (validateEmail(userMail)) {
      messageEmail.classList.add('displayNone');
    } else if (!validateEmail(userMail)) {
      messageEmail.classList.remove('displayNone');
    }

    if (userPassword.length >= 6) {
      messagePassword.classList.add('displayNone');
    } else {
      messagePassword.classList.remove('displayNone');
    }

    if (userMail !== '' && userName !== '' && userPassword !== '' && userArea !== '') {
      createUserRed(userMail, userPassword, userName);
      saveForm(userName, userArea, userMail);
    } else {
      if (userMail === '') document.getElementById('mail').classList.add('invalidInput');
      else { document.getElementById('mail').classList.remove('invalidInput'); }
      if (userName === '') document.getElementById('user').classList.add('invalidInput');
      else { document.getElementById('user').classList.remove('invalidInput'); }
      if (userPassword === '') document.getElementById('password').classList.add('invalidInput');
      else { document.getElementById('password').classList.remove('invalidInput'); }
      if (userArea === '') document.getElementById('area').classList.add('invalidInput');
      else { document.getElementById('area').classList.remove('invalidInput'); }
    }
  });
  return containerAllRegister;
};
