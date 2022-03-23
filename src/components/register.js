/* eslint-disable import/no-cycle */
import { createUserRed } from '../lib/firebase.js';

// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

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
  const buttonMaskify = document.createElement('img');
  buttonMaskify.setAttribute('src', 'img/maskify.png');
  buttonMaskify.setAttribute('id', 'maskify');
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
  const user = document.createElement('input');
  user.setAttribute('class', 'register');
  user.setAttribute('id', 'user');
  user.setAttribute('type', 'text');
  user.setAttribute('placeholder', 'Ingresa tu nombre de usuaria');
  user.setAttribute('autocomplete', 'off');
  const password = document.createElement('input');
  password.setAttribute('class', 'register');
  password.setAttribute('id', 'password');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Ingresa tu contraseña');
  password.setAttribute('autocomplete', 'off');
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
  containerInputR.appendChild(user);
  containerInputR.appendChild(password);
  containerInputR.appendChild(area);
  containerInputR.appendChild(registerButton);
  containerInputR.appendChild(buttonMaskify);
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
    console.log(userMail, userName, userPassword, userArea);
    createUserRed(userMail, userPassword);
  });
  return containerAllRegister;
};