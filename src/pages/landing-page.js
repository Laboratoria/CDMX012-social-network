// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../app.js';

export const landingPage = () => {
  const lpContent = document.createElement('div');
  lpContent.setAttribute('class', 'lp-content');

  const lpContainer = document.createElement('div');
  lpContainer.setAttribute('class', 'landing-page-container');

  // header section
  const header = document.createElement('header');
  header.setAttribute('class', 'logo-header');

  const logo = document.createElement('img');
  logo.setAttribute('class', 'logo-book');
  logo.setAttribute('src', './assets/logo sin fondo 1.png');
  logo.setAttribute('alt', 'logo book reads');

  const bookreads = document.createElement('img');
  bookreads.setAttribute('class', 'titleBookReads');
  bookreads.setAttribute('src', './assets/nombre_sin_fondo-removebg-preview 1.png');
  bookreads.setAttribute('alt', 'titleBookReads');

  const slogan = document.createElement('h1');
  slogan.innerHTML = 'Read with me';
  slogan.setAttribute('class', 'sloganSN');

  header.append(logo, bookreads, slogan);

  // buttons container
  const buttonsContainer = document.createElement('div');
  buttonsContainer.setAttribute('class', 'sign-up-in-container');

  // button sign-up section
  const signUpBtn = document.createElement('input');
  signUpBtn.setAttribute('type', 'button');
  signUpBtn.setAttribute('class', 'btn-signUp');
  signUpBtn.setAttribute('id', 'btn-signUp-LP');
  signUpBtn.setAttribute('value', 'Sign Up');

  signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/sign-up');
  });

  // button sign-in section
  const signInBtn = document.createElement('input');
  signInBtn.setAttribute('type', 'button');
  signInBtn.setAttribute('class', 'btn-signIn');
  signInBtn.setAttribute('id', 'btn-signIn-LP');
  signInBtn.setAttribute('value', 'Sign In');

  signInBtn.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/sign-in');
  });

  buttonsContainer.append(signUpBtn, signInBtn);

  const lpImage = document.createElement('div');
  lpImage.setAttribute('class', 'landing-page-img');

  lpContainer.append(header, buttonsContainer);
  lpContent.append(lpContainer, lpImage);

  return lpContent;
};
