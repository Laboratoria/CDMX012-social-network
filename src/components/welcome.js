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
  btnJoinUs.className = 'log';
  btnJoinUs.id = 'joinUs';
  btnJoinUs.textContent = 'Join Us';
  btnJoinUs.addEventListener('click', () => {
    onNavigate('/register');
  });
  const btnShoot = document.createElement('button');
  btnShoot.className = 'log';
  btnShoot.id = 'ShootIn';
  btnShoot.textContent = 'Shoot In';
  btnShoot.addEventListener('click', () => {
    onNavigate('/login');
  });
  btnDiv.append(btnJoinUs, btnShoot)
  firstSection.append(imgLogo, btnDiv);
  return firstSection;
};
