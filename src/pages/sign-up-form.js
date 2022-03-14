import { createAccount } from '../firebase.js';
import { showSignUpError, showIncorrectPass, showPassword } from '../ui.js';

export const createAccForm = () => {
  const createAccContainer = document.createElement('div');
  createAccContainer.setAttribute('class', 'createAccount-container');

  const createAccTitle = document.createElement('h2');
  createAccTitle.setAttribute('class', 'account-title');
  createAccTitle.innerHTML = 'Create an Account';

  const signUpForm = document.createElement('form');
  signUpForm.setAttribute('class', 'account-form');

  const emailFormat = document.createElement('div');
  emailFormat.setAttribute('class', 'label-icon');
  emailFormat.innerHTML = `
    <img class="mail" src='./assets/icons8-email-64 1.png' alt="mail"/>
    <label for="email" class="e-mail">E-mail</label>`;

  const txtEmail = document.createElement('input');
  txtEmail.setAttribute('name', 'email');
  txtEmail.setAttribute('class', 'e-mail');
  txtEmail.setAttribute('type', 'email');
  txtEmail.setAttribute('placeholder', 'e-mail@example.com');
  txtEmail.required = 'true';
  txtEmail.id = 'txtEmail';

  const passwordFormat = document.createElement('div');
  passwordFormat.setAttribute('class', 'label-icon');
  passwordFormat.innerHTML = `
    <img class="padlock" src='./assets/icons8-contraseña-24 1.png' alt="padlock"/>
    <label for="password" class="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters">Password</label>`;

  const eyeIcon1 = document.createElement('span');
  eyeIcon1.setAttribute('class', 'material-icons-outlined eye-icon');
  eyeIcon1.setAttribute('id', 'eyeIcon1');
  eyeIcon1.innerHTML = 'visibility';
  passwordFormat.append(eyeIcon1);

  const txtPassword = document.createElement('input');
  txtPassword.setAttribute('name', 'password');
  txtPassword.setAttribute('class', 'password');
  txtPassword.setAttribute('type', 'password');
  txtPassword.setAttribute('placeholder', 'Insert your password here');
  txtPassword.required = 'true';
  txtPassword.id = 'txtPassword';

  const passConfForm = document.createElement('div');
  passConfForm.setAttribute('class', 'label-icon');
  passConfForm.innerHTML = `
    <img class="padlock" src='./assets/icons8-contraseña-24 1.png' alt="padlock"/>
    <label for="passwordConfirm" class="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters">Confirm your password</label>`;

  const eyeIcon2 = document.createElement('span');
  eyeIcon2.setAttribute('class', 'material-icons-outlined eye-icon');
  eyeIcon2.setAttribute('id', 'eyeIcon2');
  eyeIcon2.innerHTML = 'visibility';
  passConfForm.append(eyeIcon2);

  const passwordConf = document.createElement('input');
  passwordConf.setAttribute('name', 'passwordConfirm');
  passwordConf.setAttribute('class', 'password');
  passwordConf.setAttribute('type', 'password');
  passwordConf.setAttribute('placeholder', 'Confirm your password');
  passwordConf.required = 'true';
  passwordConf.id = 'passwordConfirm';

  signUpForm.append(emailFormat, txtEmail, passwordFormat, txtPassword, passConfForm, passwordConf);

  const errorSection = document.createElement('p');
  errorSection.setAttribute('class', 'error show-error-msg');
  errorSection.setAttribute('id', 'errorArea');

  const btnSignUp = document.createElement('input');
  btnSignUp.setAttribute('type', 'button');
  btnSignUp.setAttribute('class', 'btn-signUp');
  btnSignUp.setAttribute('value', 'Sign Up');

  createAccContainer.append(createAccTitle, signUpForm, errorSection, btnSignUp);

  // Password verification
  txtPassword.addEventListener('keyup', () => showIncorrectPass());
  passwordConf.addEventListener('keyup', () => showIncorrectPass());

  // Mask and unmask passwords
  eyeIcon1.addEventListener('click', () => showPassword(txtPassword, eyeIcon1));
  eyeIcon2.addEventListener('click', () => showPassword(passwordConf, eyeIcon2));

  // Sign up with email
  btnSignUp.addEventListener('click', () => {
    const email = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtPassword').value;

    createAccount(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        errorSection.innerHTML = '';
        signUpForm.reset();
      })
      .catch((error) => {
        console.log(error);
        showSignUpError(error);
      });
  });

  return createAccContainer;
};
