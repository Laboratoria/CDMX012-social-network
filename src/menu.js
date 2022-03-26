/* eslint-disable import/no-cycle */
import { onNavigate } from './app.js';
import { signOutBR } from './lib/auth.js';
import { getProfileInfo } from './lib/profileUser.js';

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

  const profileData = document.createElement('div');
  profileData.setAttribute('id', 'profile-data');

  getProfileInfo().then((user) => {
    profileData.innerHTML = `
        <p id="user-name">${user.name}</p>
        <p id="user-username">@${user.username}</p>
        <p id="user-bio">${user.bio}</p>
    `;
  });

  profileInfo.append(close, profileData);

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
      const body = document.body;
      body.style.overflow = '';
      onNavigate('/');
    }).catch((error) => {
      console.log(error);
    });
  });

  menuContainer.append(profileInfo, configuration);
  background.append(menuContainer);

  return background;
};
