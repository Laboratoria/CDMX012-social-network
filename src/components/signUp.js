import { onNavigate } from '../main.js';
import { createUser } from '../firebase.js';
import { validateInformation } from './helper.js';

export const signup = () => {
  // elements
  const header = document.createElement('header');
  const imgLogo = document.createElement('img');
  const divLogo = document.createElement('div');
  const pLogo = document.createElement('p');
  const buttonGoogle = document.createElement('button');
  const imgGoogle = document.createElement('img');
  const buttonTwitter = document.createElement('button');
  const imgTwitter = document.createElement('img');
  const separation = document.createElement('div');
  const line = document.createElement('div');
  const or = document.createElement('p');
  const line2 = document.createElement('div');
  const inputEmail = document.createElement('input');
  const span = document.createElement('span');
  const inputPassword = document.createElement('input');
  const imgEye = document.createElement('i');
  const inputUsername = document.createElement('input');
  const buttonSignup = document.createElement('button');
  const errorMessage = document.createElement('div');
  const divAccount = document.createElement('div');
  const globalSignupDiv = document.createElement('div');

  // attributes
  imgLogo.setAttribute('src', './img/logosmall.png');
  divLogo.setAttribute('id', 'divLogo');
  buttonGoogle.setAttribute('id', 'buttonGoogle');
  imgGoogle.setAttribute('src', './img/google-logo.png');
  imgGoogle.setAttribute('id', 'imgGoogle');
  buttonTwitter.setAttribute('id', 'buttonTwitter');
  imgTwitter.setAttribute('src', './img/logo.png');
  imgTwitter.setAttribute('id', 'imgTwitter');
  separation.setAttribute('id', 'separation');
  line.setAttribute('class', 'line');
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('placeholder', 'Email');
  inputEmail.setAttribute('id', 'inputEmail');
  inputEmail.setAttribute('class', 'input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Password');
  inputPassword.setAttribute('id', 'inputPassword');
  inputPassword.setAttribute('class', 'input');
  inputUsername.setAttribute('type', 'text');
  inputUsername.setAttribute('placeholder', 'Username');
  inputUsername.setAttribute('id', 'inputUsername');
  inputUsername.setAttribute('class', 'input');
  line2.setAttribute('class', 'line');
  span.setAttribute('class', 'eye');
  imgEye.setAttribute('id', 'imgEye');
  imgEye.setAttribute('class', 'fa-solid fa-eye');
  buttonSignup.setAttribute('id', 'buttonSignup');
  errorMessage.setAttribute('id', 'errorMessage');
  divAccount.setAttribute('id', 'divAccount');
  globalSignupDiv.setAttribute('id', 'globalSignupDiv');

  // innerText
  divLogo.innerText = 'Mukí';
  pLogo.innerText = 'A safe network for women';
  buttonGoogle.innerText = 'Sign up with Google';
  buttonTwitter.innerText = 'Sign up with Twitter';
  or.innerText = 'Or';
  buttonSignup.innerText = 'Continue';
  divAccount.innerText = 'Already have an account?';

  // append
  header.appendChild(divLogo);
  header.appendChild(imgLogo);
  divLogo.appendChild(pLogo);
  span.appendChild(inputPassword);
  span.appendChild(imgEye);
  separation.appendChild(line);
  separation.appendChild(or);
  separation.appendChild(line2);
  buttonGoogle.appendChild(imgGoogle);
  buttonTwitter.appendChild(imgTwitter);
  globalSignupDiv.appendChild(header);
  globalSignupDiv.appendChild(buttonGoogle);
  globalSignupDiv.appendChild(buttonTwitter);
  globalSignupDiv.appendChild(separation);
  globalSignupDiv.appendChild(inputEmail);
  globalSignupDiv.appendChild(span);
  globalSignupDiv.appendChild(inputUsername);
  globalSignupDiv.appendChild(errorMessage);
  globalSignupDiv.appendChild(buttonSignup);
  globalSignupDiv.appendChild(divAccount);

  imgEye.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password';
    }
  });

  span.addEventListener('focus', () => span.classList.add('focused'), true);
  span.addEventListener('blur', () => span.classList.remove('focused'), true);

  buttonSignup.addEventListener('click', () => {
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    const username = document.getElementById('inputUsername').value;

    const informationValidated = validateInformation(email, password);
    if (informationValidated.status === true) {
      const userCreated = createUser(email, password, username);
     if (userCreated) onNavigate('/home');
      onNavigate('/home');
    } else {
      document.getElementById('errorMessage').innerText = informationValidated.message;
    }

    // if (email === '' || password === '' || username === '') {
    //   document.getElementById('errorMessage').innerText = 'Please fill all the information';
    // } else {
    //   const userCreated = createUser(email, password, username);
    //   if (userCreated) onNavigate('/home');
    // }
  });
  return globalSignupDiv;
};
