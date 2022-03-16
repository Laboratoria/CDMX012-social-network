import { onNavigate } from '../main.js';

export const welcome = () => {
  const firstSection = document.createElement('section');
  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('src', './assets/logo.png');
  imgLogo.className = 'meetArcade';
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
  firstSection.append(imgLogo, btnJoinUs, btnShoot);
  return firstSection;
};
