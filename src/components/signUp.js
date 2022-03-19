/* eslint-disable import/named */
import { onNavigate } from '../main.js';
import { createUser, createUserWithTwitter, createUserWithGoogle } from '../firebase.js';
import { validateInformation, errorHandler } from './helper.js';

export const signup = () => {
  // elements
  const pinkContainer = document.createElement('div');
  const pinkTextOne = document.createElement('div');
  const pinkTexTwo = document.createElement('div');
  const pinkTextThree = document.createElement('div');
  const header = document.createElement('header');
  const imgLogo = document.createElement('img');
  const divLogo = document.createElement('div');
  const imgTextOne = document.createElement('img');
  const pLogo = document.createElement('p');
  const imgTextTwo = document.createElement('img');
  const imgTextThree = document.createElement('img');
  const signUpFree = document.createElement('p');
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
  const pAccount = document.createElement('p');
  const globalSignupDiv = document.createElement('div');
  const globalContainer = document.getElementById('globalContainer');

  // attributes
  pinkContainer.setAttribute('class', 'pinkContainer');
  pinkTextOne.setAttribute('class', 'pinkTextOneAndThree');
  imgTextOne.setAttribute('src', './img/mujeres.png');
  imgTextOne.setAttribute('class', 'imgTextPink');
  imgTextTwo.setAttribute('class', 'imgTextPink');
  imgTextThree.setAttribute('class', 'imgTextPink');
  imgTextTwo.setAttribute('src', './img/pensamiento.png');
  imgTextThree.setAttribute('src', './img/unidas.png');
  pinkTexTwo.setAttribute('class', 'pinkTextTwo');
  pinkTextThree.setAttribute('class', 'pinkTextOneAndThree');
  imgLogo.setAttribute('src', './img/logosmall.png');
  pLogo.setAttribute('class', 'pLogo');
  divLogo.setAttribute('id', 'divLogo');
  signUpFree.setAttribute('class', 'singUpFree');
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
  pAccount.setAttribute('class', 'pAccount');

  // innerText
  divLogo.innerText = 'Mukí';
  pLogo.innerText = 'A safe network for women';
  pinkTextOne.innerText = 'Connect with women from all over the world.';
  pinkTexTwo.innerText = 'Tell us what you think, in a safe space to share ideas.';
  pinkTextThree.innerText = 'Create support networks among women.';
  signUpFree.innerText = 'Sign Up. It’s free!';
  buttonGoogle.innerText = 'Sign up with Google';
  buttonTwitter.innerText = 'Sign up with Twitter';
  or.innerText = 'Or';
  buttonSignup.innerText = 'Continue';
  divAccount.innerText = 'Already have an account?';
  pAccount.innerText = 'Log in';

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
  globalSignupDiv.appendChild(signUpFree);
  globalSignupDiv.appendChild(buttonGoogle);
  globalSignupDiv.appendChild(buttonTwitter);
  globalSignupDiv.appendChild(separation);
  globalSignupDiv.appendChild(inputEmail);
  globalSignupDiv.appendChild(span);
  globalSignupDiv.appendChild(inputUsername);
  globalSignupDiv.appendChild(errorMessage);
  globalSignupDiv.appendChild(buttonSignup);
  globalSignupDiv.appendChild(divAccount);
  globalContainer.appendChild(pinkContainer);
  pinkContainer.appendChild(pinkTextOne);
  pinkContainer.appendChild(pinkTexTwo);
  pinkContainer.appendChild(pinkTextThree);
  pinkTextOne.appendChild(imgTextOne);
  pinkTexTwo.appendChild(imgTextTwo);
  pinkTextThree.appendChild(imgTextThree);
  divAccount.appendChild(pAccount);

  imgEye.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password';
    }
  });

  span.addEventListener('focus', () => span.classList.add('focused'), true);
  span.addEventListener('blur', () => span.classList.remove('focused'), true);

  buttonGoogle.addEventListener('click', () => {
    createUserWithGoogle().then((result) => {
      if (result) {
        onNavigate('/home');
      } else {
        errorMessage.innerText = 'You must choose a Google account';
      }
    });
  });

  buttonTwitter.addEventListener('click', () => {
    createUserWithTwitter().then((result) => {
      if (result) {
        alert('User created');
        onNavigate('/home');
      } else {
        errorMessage.innerText = 'You must choose a Twitter account';
      }
    });
  });

  buttonSignup.addEventListener('click', () => {
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    const username = document.getElementById('inputUsername').value;
    const informationValidated = validateInformation(email, password);
    if (informationValidated.status) {
      createUser(email, password, username).then((userCredential) => {
        if (userCredential.status) {
          onNavigate('/home');
        } else {
          errorMessage.innerText = errorHandler(userCredential.errorCode);
        }
      });
    } else {
      errorMessage.innerText = informationValidated.message;
    }
  });

  divAccount.addEventListener('click', (event) => {
    if (event) {
      onNavigate('/');
    }
  });
  return globalSignupDiv;
};
