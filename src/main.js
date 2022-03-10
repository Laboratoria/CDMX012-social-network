// Este es el punto de entrada de tu aplicacion

// import { showAndHide } from './lib/index.js';

// myFunction();

// hide or show a section
const btnJoinUs = document.getElementById('joinUs');
const btnShoot = document.getElementById('shootIn');
const secLogIn = document.getElementById('logIn');
const joinScreen = document.getElementById('joinUsScreen');
const shootScreen = document.getElementById('shootInScreen');
const backToaJ = document.getElementById('aJ');
const backToaS = document.getElementById('aS');

btnJoinUs.addEventListener('click', () => {
  joinScreen.style.display = 'block';
  if (joinScreen) {
    secLogIn.style.display = 'none';
  }
});

btnShoot.addEventListener('click', () => {
  shootScreen.style.display = 'block';
  if (shootScreen) {
    secLogIn.style.display = 'none';
  }
});

backToaJ.addEventListener('click', () => {
  secLogIn.style.display = 'block';
  if (joinScreen) {
    joinScreen.style.display = 'none';
  }
});

backToaS.addEventListener('click', () => {
  secLogIn.style.display = 'block';
  if (shootScreen) {
    shootScreen.style.display = 'none';
  }
});
