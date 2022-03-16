/* eslint-disable max-len */
import { onNavigate } from '../main.js';

export const register = () => {
  const joinUsSection = document.createElement('section');
  joinUsSection.className = 'screenJoin';
  joinUsSection.id = 'joinUsScreen';
  const titles = document.createElement('p');
  titles.textContent = 'Join Us';
  titles.className = 'titles';
  const imgArrowBack = document.createElement('img');
  imgArrowBack.setAttribute('src', './assets/arrow.png');
  imgArrowBack.className = 'arrowBack';
  imgArrowBack.id = 'aJ';
  imgArrowBack.addEventListener('click', () => {
    onNavigate('/welcome');
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

  titles.appendChild(imgArrowBack);
  containerIcons.appendChild(iconG);
  infoForm.append(labelUser, inputUserName, labelMail, inputEmail, labelPassword, inputPassword, btnInfoJoinUs);
  joinUsSection.append(titles, signInWith, containerIcons, infoForm);
  return joinUsSection;

  //   const RegisterDiv = document.createElement('div');
  //   const nodoH2 = document.createElement('h2');
  //   const buttonHome = document.createElement('button');

  //   buttonHome.textContent = 'Return Home';
  //   buttonHome.addEventListener('click', () => {
  //     onNavigate('/');
  //   });

  //   nodoH2.textContent = 'Welcome to register';

//   RegisterDiv.append(nodoH2, buttonHome);
//   return RegisterDiv;
};
