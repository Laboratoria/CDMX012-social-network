/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const welcome = () => {
  const firstSection = document.createElement('section');
  firstSection.setAttribute('id', 'logIn');
  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('src', './assets/logo.png');
  imgLogo.className = 'meetArcade';
  const btnDiv = document.createElement('div');
  btnDiv.className = 'divContainer';
  const btnJoinUs = document.createElement('button');
  btnJoinUs.className = 'btn log';
  btnJoinUs.id = 'joinUs';
  btnJoinUs.textContent = 'Register';
  btnJoinUs.addEventListener('click', () => {
    onNavigate('/register');
  });
  const btnShoot = document.createElement('button');
  btnShoot.className = 'btn log';
  btnShoot.id = 'ShootIn';
  btnShoot.textContent = 'Log In';
  btnShoot.addEventListener('click', () => {
    onNavigate('/login');
  });
  btnDiv.append(btnJoinUs, btnShoot);
  firstSection.append(imgLogo, btnDiv);
  return firstSection;
};
