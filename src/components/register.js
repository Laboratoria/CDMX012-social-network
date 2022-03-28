/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import { onNavigate } from '../main.js';
import { createNewUsers, googleSignIn } from '../lib/firebase.js';
// import { createAccount } from '../lib/firebase.js';

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
  iconG.addEventListener('click', (e) => {
    e.preventDefault();
    googleSignIn();
  });

  const iconF = document.createElement('img');
  iconF.setAttribute('src', './assets/facebook.png');

  const infoForm = document.createElement('form');
  infoForm.className = 'formContainer';
  const labelUser = document.createElement('label');
  labelUser.className = 'text';
  labelUser.textContent = 'User name:';

  const inputUserName = document.createElement('input');
  inputUserName.setAttribute('type', 'text');
  inputUserName.setAttribute('placeholder', 'Username');
  inputUserName.className = 'inputs';
  inputUserName.id = 'username';

  const labelMail = document.createElement('label');
  labelMail.className = 'text';
  labelMail.textContent = 'Email:';
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Example@gmail.com');
  inputEmail.setAttribute('autocomplete', 'off');
  inputEmail.className = 'inputs';
  inputEmail.required = 'true';
  inputEmail.id = 'email';

  const labelPassword = document.createElement('label');
  labelPassword.className = 'text';
  labelPassword.textContent = 'Password:';
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'More than 6 characters');
  inputPassword.setAttribute('autocomplete', 'off');
  inputPassword.className = 'inputs';
  inputPassword.required = 'true';
  inputPassword.id = 'password';
  const maskifyOff = document.createElement('img');
  maskifyOff.setAttribute('src', './assets/eye.png');
  maskifyOff.id = 'maskifyOff';
  maskifyOff.className = 'eye';
  const maskifyOn = document.createElement('img');
  maskifyOn.setAttribute('src', './assets/eye_off.png');
  maskifyOn.setAttribute('hidden', 'true');
  maskifyOn.id = 'maskifyOn';
  maskifyOn.className = 'eye';
  maskifyOff.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      maskifyOff.setAttribute('hidden', 'true');
      maskifyOn.removeAttribute('hidden');
    }
  });

  maskifyOn.addEventListener('click', () => {
    if (inputPassword.type === 'text') {
      inputPassword.type = 'password';
      maskifyOn.setAttribute('hidden', 'true');
      maskifyOff.removeAttribute('hidden');
    }
  });

  const errorMessage = document.createElement('p');
  errorMessage.className = 'messages';
  errorMessage.id = 'pError';

  const btnInfoJoinUs = document.createElement('button');
  btnInfoJoinUs.className = 'btnsSign';
  btnInfoJoinUs.id = 'submitInfoJoin';
  btnInfoJoinUs.textContent = 'Join Us';

  const divFooter = document.createElement('div');
  divFooter.className = 'containerFooter';

  const labelHaveAcc = document.createElement('footer');
  labelHaveAcc.className = 'sign';
  labelHaveAcc.textContent = 'Have an account?';

  const btnRefLogin = document.createElement('button');
  btnRefLogin.className = 'btnRefLogin';
  btnRefLogin.id = 'refLogin';
  btnRefLogin.textContent = 'Shoot in';

  btnInfoJoinUs.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createNewUsers(username, email, password);
  });

  header.append(imgArrowBack, titles);
  containerIcons.append(iconG, iconF);
  infoForm.append(labelUser, inputUserName, labelMail, inputEmail, labelPassword, inputPassword, maskifyOff, maskifyOn, errorMessage);
  divFooter.append(labelHaveAcc, btnRefLogin);
  joinUsSection.append(header, signInWith, containerIcons, infoForm, btnInfoJoinUs, divFooter);
  return joinUsSection;
};
