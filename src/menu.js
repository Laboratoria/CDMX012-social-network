/* eslint-disable import/no-cycle */
import { onNavigate } from './app.js';
import { signOutBR } from './lib/auth.js';

export const menu = () => {
  const background = document.createElement('div');
  background.setAttribute('id', 'general-container');

  const menuContainer = document.createElement('div');
  menuContainer.setAttribute('id', 'menu-container');

  const profileInfo = document.createElement('div');
  profileInfo.setAttribute('id', 'profile-container');

  const close = document.createElement('img');
  close.setAttribute('src', './assets/close.png');
  close.setAttribute('id', 'close-img');

  close.addEventListener('click', () => {
    const body = document.body;
    body.style.overflow = '';
    const fathernode = document.querySelector('.readingPage');
    fathernode.removeChild(background);
  });

  profileInfo.append(close);

  const configuration = document.createElement('div');
  configuration.setAttribute('id', 'config-container');
  const SignOut = document.createElement('div');
  const SignOutImg = document.createElement('img');
  SignOutImg.setAttribute('src', './assets/logout.png');
  const SignOutTxt = document.createElement('p');
  SignOutTxt.textContent = 'Sign Out';
  SignOut.append(SignOutImg, SignOutTxt);
  configuration.append(SignOut);

  SignOutTxt.addEventListener('click', () => {
    signOutBR().then(() => {
      onNavigate('/');
    }).catch((error) => {
      console.log(error);
    });
  });

  menuContainer.append(profileInfo, configuration);
  background.append(menuContainer);

  return background;
};
