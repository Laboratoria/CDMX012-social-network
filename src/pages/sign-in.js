/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import {
  signInAccount, signUpGoogle, signUpFacebook, signUpGithub,
} from '../lib/auth.js';
import { onNavigate } from '../app.js';

export const signInPage = () => {
  const signInWelcomePage = document.createElement('div');
  signInWelcomePage.setAttribute('class', 'signInWelcomePage');

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

  // guardar componentes de header
  header.append(logo, bookreads, slogan);

  const lpImage = document.createElement('div');
  lpImage.setAttribute('class', 'landing-page-img');

  lpContainer.append(header);
  lpContent.append(lpContainer, lpImage);

  // seccion enter account container
  const enterAccContainer = document.createElement('div');
  enterAccContainer.setAttribute('class', 'enterAccount-container');

  const enterAccTitle = document.createElement('h2');
  enterAccTitle.setAttribute('class', 'welcome-title');
  enterAccTitle.innerHTML = 'Welcome back';

  const signInForm = document.createElement('form');
  signInForm.setAttribute('class', 'enterAccount-form');
  signInForm.setAttribute('id', 'signInForm');

  const emailFormat = document.createElement('div');
  emailFormat.setAttribute('class', 'label-icon');
  emailFormat.innerHTML = '<img class="mail" src="./assets/icons8-email-64 1.png" alt="mail"/><label for="email" class="e-mail">E-mail</label>';

  const txtEmail = document.createElement('input');
  txtEmail.setAttribute('class', 'e-mail');
  txtEmail.setAttribute('type', 'email');
  txtEmail.setAttribute('placeholder', 'e-mail@example.com');
  txtEmail.required = 'true';
  txtEmail.id = 'txtEmail';

  const passwordFormat = document.createElement('div');
  passwordFormat.setAttribute('class', 'label-icon');
  passwordFormat.innerHTML = '<img class="padlock" src="./assets/icons8-contraseña-24 1.png" alt="padlock"/><label for="password" class="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters">Password</label>';
  // creacion de contraseña
  const txtPassword = document.createElement('input');
  txtPassword.setAttribute('class', 'password');
  txtPassword.setAttribute('type', 'password');
  txtPassword.setAttribute('placeholder', 'Insert your password here');
  txtPassword.required = 'true';
  txtPassword.id = 'txtPassword';
  // creacion de mensaje de error
  const errorMessage = document.createElement('p');
  errorMessage.setAttribute('class', 'error-message');
  // guardar componentes de signInForm
  signInForm.append(emailFormat, txtEmail, passwordFormat, txtPassword, errorMessage);
  // creacion de btn de signIn Welcome
  const btnSignInWelcome = document.createElement('input');
  btnSignInWelcome.setAttribute('type', 'button');
  btnSignInWelcome.setAttribute('class', 'btn-signInWelcome');
  btnSignInWelcome.setAttribute('id', 'btn-signInWelcome');
  btnSignInWelcome.setAttribute('value', 'Sign In');

  // contenido de providers google facebook y github
  const providersContent = document.createElement('span');
  providersContent.setAttribute('class', 'otherProviders');
  providersContent.innerHTML = '<label for="" class="otherProviders">or sign in with</label>';
  // creacion de btn google, fb y github
  const googleLogo = document.createElement('img');
  googleLogo.setAttribute('class', 'logoGoogle');
  googleLogo.setAttribute('id', 'btn-google2');
  googleLogo.setAttribute('src', './assets/icons8-logo-de-google-48 2.png');
  googleLogo.setAttribute('alt', 'logo Google');

  const facebookLogo = document.createElement('img');
  facebookLogo.setAttribute('class', 'logoFacebook');
  facebookLogo.setAttribute('id', 'btn-facebook2');
  facebookLogo.setAttribute('src', './assets/image 15.png');
  facebookLogo.setAttribute('alt', 'logo Facebook');

  const githubLogo = document.createElement('img');
  githubLogo.setAttribute('class', 'logoGithub');
  githubLogo.setAttribute('id', 'btn-github2');
  githubLogo.setAttribute('src', './assets/icons8-github-60.png');
  githubLogo.setAttribute('alt', 'logo Github');
  // guardar logos de providers
  providersContent.append(googleLogo, facebookLogo, githubLogo);

  // redireccionamiento a google, facebook y github
  googleLogo.addEventListener('click', () => {
    signUpGoogle();
  });

  facebookLogo.addEventListener('click', () => {
    signUpFacebook();
  });

  githubLogo.addEventListener('click', () => {
    signUpGithub();
  });

  // guardar los elementos del form
  enterAccContainer.append(enterAccTitle, signInForm, btnSignInWelcome, providersContent);

  // boton sign in welcome para reactivar la cuenta
  btnSignInWelcome.addEventListener('click', () => {
    const email = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtPassword').value;

    signInAccount(email, password)
      .then(() => {
        /* const user = userCredential.user;
         console.log(user); */
        errorMessage.innerHTML = '';
        onNavigate('/home');
      })
      .catch(() => {
        /* console.log(error); */
        errorMessage.innerHTML = 'Wrong e-mail or/and password';
      });
  });

  signInWelcomePage.append(lpContent, enterAccContainer);
  return (signInWelcomePage);
};
