/* eslint-disable max-len */
import { onNavigate } from '../main.js';

export const register = () => {
  const joinUsSection = document.createElement('section');
  joinUsSection.className = 'screenJoin';
  joinUsSection.id = 'joinUsScreen';
  const header = document.createElement('header');
  header.className = 'header';
  const titles = document.createElement('p');
  titles.textContent = 'Join Us';
  titles.className = 'titles';
  const imgArrowBack = document.createElement('img');
  imgArrowBack.setAttribute('src', './assets/arrow.png');
  imgArrowBack.className = 'arrowBack';
  // imgArrowBack.id = 'aJ';
  imgArrowBack.addEventListener('click', () => {
    onNavigate('/');
  });
  // // -------ELIGE CON QUE HACER SIGN IN-----

  const signInWith = document.createElement('label');
  signInWith.className = 'sign';
  signInWith.textContent = 'Sign in with:';

  // containerIcons es contenedor del icono de Google
  const containerIcons = document.createElement('div');
  containerIcons.className = 'container';
  const iconG = document.createElement('img');
  iconG.setAttribute('src', './assets/google.png');

  const infoForm = document.createElement('div');
  infoForm.className = 'formContainer';
  const labelUser = document.createElement('label');
  labelUser.className = 'text';
  labelUser.textContent = 'User name:';

  const inputUserName = document.createElement('input');
  inputUserName.setAttribute('type', 'text');
  inputUserName.className = 'inputs';
  inputUserName.id = 'username';

  const labelMail = document.createElement('label');
  labelMail.className = 'text';
  labelMail.textContent = 'Email:';
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.className = 'inputs';
  inputEmail.id = 'email';

  const labelPassword = document.createElement('label');
  labelPassword.className = 'text';
  labelPassword.textContent = 'Password:';
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.className = 'inputs';
  inputPassword.id = 'password';

  const btnInfoJoinUs = document.createElement('button');
  btnInfoJoinUs.className = 'btnsSign';
  btnInfoJoinUs.id = 'submitInfoJoin';
  btnInfoJoinUs.textContent = 'Join Us';

  header.append(imgArrowBack, titles);
  containerIcons.appendChild(iconG);
  infoForm.append(labelUser, inputUserName, labelMail, inputEmail, labelPassword, inputPassword, btnInfoJoinUs);
  joinUsSection.append(header, signInWith, containerIcons, infoForm);
  return joinUsSection;
};
