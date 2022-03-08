// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

let header = document.createElement('header');
let imgLogo = document.createElement('img');
imgLogo.setAttribute('src', './img/logosmall.png');
let divLogo = document.createElement('div');
divLogo.innerText = 'Mukí';
let pLogo = document.createElement('p');
pLogo.innerText = 'A safe network for women';
divLogo.setAttribute('id', 'divLogo');
let buttonGoogle = document.createElement('button');
buttonGoogle.innerText = 'Sign up with Google';
buttonGoogle.setAttribute('id', 'buttonGoogle');
let buttonFacebook = document.createElement('button');
buttonFacebook.innerText = 'Sign up with Facebook';
buttonFacebook.setAttribute('id', 'buttonFacebook');
let globalContainer = document.getElementById('globalContainer');
let inputEmail = document.createElement('input');
inputEmail.setAttribute('type', 'text');
inputEmail.setAttribute('placeholder', 'Email');
inputEmail.setAttribute('id', 'inputEmail');
inputEmail.setAttribute('class', 'input');
let inputPassword = document.createElement('input');
inputPassword.setAttribute('type', 'password');
inputPassword.setAttribute('placeholder', 'Password');
inputPassword.setAttribute('id', 'inputPassword');
inputPassword.setAttribute('class', 'input');
let inputUsername = document.createElement('input');
inputUsername.setAttribute('type', 'text');
inputUsername.setAttribute('placeholder', 'Username');
inputUsername.setAttribute('id', 'inputUsername');
inputUsername.setAttribute('class', 'input');
let buttonSignup = document.createElement('button');
buttonSignup.setAttribute('id', 'buttonSignup');
buttonSignup.innerText = 'Continue';
let divAccount= document.createElement('div');
divAccount.innerText = 'Already have an account?';
divAccount.setAttribute('id', 'divAccount');

header.appendChild(divLogo);
header.appendChild(imgLogo);
divLogo.appendChild(pLogo);

globalContainer.appendChild(header);
globalContainer.appendChild(buttonGoogle);
globalContainer.appendChild(buttonFacebook);
globalContainer.appendChild(inputEmail);
globalContainer.appendChild(inputPassword);
globalContainer.appendChild(inputUsername);
globalContainer.appendChild(buttonSignup);
globalContainer.appendChild(divAccount);



