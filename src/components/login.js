/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const login = () => {
  const shootInSection = document.createElement('section');
  shootInSection.className = 'screenJoin';
  shootInSection.id = 'shootInScreen';
  const header = document.createElement('header');
  header.className = 'header';
  const titles = document.createElement('p');
  titles.textContent = 'Shoot In';
  titles.className = 'titles';
  const imgArrowBack = document.createElement('img');
  imgArrowBack.setAttribute('src', './assets/arrow.png');
  imgArrowBack.className = 'arrowBack';
  //   imgArrowBack.id = 'aJ';
  imgArrowBack.addEventListener('click', () => {
    onNavigate('/');
  });
  // -----ELIGE CON QUE HACER LOG IN -------

  const logInWith = document.createElement('label');
  logInWith.className = 'sign';
  logInWith.textContent = 'Log in with:';

  // containerIcons es contenedor del icono de Google
  const containerIcons = document.createElement('div');
  containerIcons.className = 'container';

  const iconG = document.createElement('img');
  iconG.setAttribute('src', './assets/google.png');
  const iconF = document.createElement('img');
  iconF.setAttribute('src', './assets/facebook.png');

  const infoForm = document.createElement('div');
  infoForm.className = 'formContainer';

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

  const divFooter = document.createElement('div');
  divFooter.className = 'containerFooter';

  const labelHaveAcc = document.createElement('footer');
  labelHaveAcc.className = 'sign';
  labelHaveAcc.textContent = 'Dont have an account?';

  const btnRefJoinUs = document.createElement('button');
  btnRefJoinUs.className = 'btnRefLogin';
  btnRefJoinUs.id = 'refJoinUs';
  btnRefJoinUs.textContent = 'Join us';

  const btnInfoShootIn = document.createElement('button');
  btnInfoShootIn.className = 'btnShootIn';
  btnInfoShootIn.id = 'submitInfoShoot';
  btnInfoShootIn.textContent = 'Shoot In';

  const errorMessage = document.createElement('p');
  errorMessage.className = 'messages';
  errorMessage.id = 'pError';

  header.append(imgArrowBack, titles);
  containerIcons.append(iconG, iconF);
  infoForm.append(labelMail, inputEmail, labelPassword, inputPassword, errorMessage, btnInfoShootIn);
  divFooter.append(labelHaveAcc, btnRefJoinUs);
  shootInSection.append(header, logInWith, containerIcons, infoForm, divFooter);
  return shootInSection;
};
