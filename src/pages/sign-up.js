import { createAccount } from '../firebase.js';
import { showSignUpError } from '../ui.js';

export const signUpPage = () => {
  const createAccContainer = document.createElement('div');
  createAccContainer.setAttribute('class', 'createAccount-container');

  const createAccTitle = document.createElement('h2');
  createAccTitle.setAttribute('class', 'account-title');
  createAccTitle.innerHTML = 'Create an Account';

  const signUpForm = document.createElement('form');
  signUpForm.setAttribute('class', 'account-form');
  signUpForm.setAttribute('id', 'signUpForm');

  const emailFormat = document.createElement('div');
  emailFormat.innerHTML = `
    <label for="email" class="e-mail">E-mail</label>
    <img class="mail" src='./assets/icons8-email-64 1.png' alt="mail"/>
    `;

  const txtEmail = document.createElement('input');
  txtEmail.setAttribute('class', 'e-mail');
  txtEmail.setAttribute('type', 'email');
  txtEmail.setAttribute('placeholder', 'e-mail@example.com');
  txtEmail.required = 'true';
  txtEmail.id = 'txtEmail';

  const passwordFormat = document.createElement('div');
  passwordFormat.innerHTML = `
    <label for="password" class="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters">Password</label>
    <img class="padlock" src='./assets/icons8-contraseña-24 1.png' alt="padlock"/>
    `;

  const txtPassword = document.createElement('input');
  txtPassword.setAttribute('class', 'password');
  txtPassword.setAttribute('type', 'password');
  txtPassword.setAttribute('placeholder', 'Insert your password here');
  txtPassword.required = 'true';
  txtPassword.id = 'txtPassword';

  const errorSection = document.createElement('p');
  errorSection.setAttribute('class', 'error show-error-msg');
  errorSection.setAttribute('id', 'errorArea');

  signUpForm.append(emailFormat, txtEmail, passwordFormat, txtPassword, errorSection);

  const btnSignUp = document.createElement('input');
  btnSignUp.setAttribute('type', 'button');
  btnSignUp.setAttribute('class', 'btn-signUp');
  btnSignUp.setAttribute('id', 'btn-signUp');
  btnSignUp.setAttribute('value', 'Sign Up');

  createAccContainer.append(createAccTitle, signUpForm, btnSignUp);

  // Funcionalidad de sign up with email
  btnSignUp.addEventListener('click', () => {
    const email = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtPassword').value;

    const errorA = document.getElementById('errorArea');
    const form = document.getElementById('signUpForm');

    createAccount(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        errorA.innerHTML = '';
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        showSignUpError(error);
      });
  });

  const providersSection = document.createElement('div');
  providersSection.innerHTML = `
    <span class="otherProviders">
        <label for="" class="otherProviders">or sign up with</label>
      </span>
      <span class="logosProviders">
        <img class="logoGoogle" id="btn-google" src="./assets/icons8-logo-de-google-48 2.png" alt="logoGoogle">
        <img class="logoFacebook" id="btn-facebook" src="./assets/image 15.png" alt="logoFacebook"></img>
      </span>
  `;

  createAccContainer.append(providersSection);
  return createAccContainer;
};
