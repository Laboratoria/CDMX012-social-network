/* eslint-disable import/no-cycle */
import { signUpGoogle, signUpFacebook, signUpGithub } from '../firebase.js';
import { createAccForm } from './sign-up-form.js';

export const signUpPage = () => {
  const signUpContent = document.createElement('div');
  signUpContent.setAttribute('class', 'lp-content');

  // Element used to set the image on the right side of the screen on the desktop version
  const lpImage = document.createElement('div');
  lpImage.setAttribute('class', 'landing-page-img');

  // Import of the create account form
  const createAccContainer = createAccForm();

  // Section to sign up with other providers
  const providersSection = document.createElement('div');
  providersSection.setAttribute('class', 'otherProviders');
  providersSection.innerHTML = '<label class="otherProviders">or sign up with</label>';

  const googleLogo = document.createElement('img');
  googleLogo.setAttribute('class', 'logoGoogle');
  googleLogo.setAttribute('id', 'btn-google');
  googleLogo.setAttribute('src', './assets/icons8-logo-de-google-48 2.png');
  googleLogo.setAttribute('alt', 'logo Google');

  const facebookLogo = document.createElement('img');
  facebookLogo.setAttribute('class', 'logoFacebook');
  facebookLogo.setAttribute('id', 'btn-facebook');
  facebookLogo.setAttribute('src', './assets/image 15.png');
  facebookLogo.setAttribute('alt', 'logo Facebook');

  const githubLogo = document.createElement('img');
  githubLogo.setAttribute('class', 'logoGithub');
  githubLogo.setAttribute('id', 'btn-github');
  githubLogo.setAttribute('src', './assets/icons8-github-60.png');
  githubLogo.setAttribute('alt', 'logo Github');

  providersSection.append(googleLogo, facebookLogo, githubLogo);

  createAccContainer.append(providersSection);

  // Functions to sign up with other providers using firebase
  googleLogo.addEventListener('click', () => signUpGoogle());

  facebookLogo.addEventListener('click', () => signUpFacebook());

  githubLogo.addEventListener('click', () => signUpGithub());

  signUpContent.append(createAccContainer, lpImage);

  return signUpContent;
};
