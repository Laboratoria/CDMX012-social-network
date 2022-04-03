// eslint-disable-next-line import/no-cycle
// // import { onNavigate } from '../main.js';
// import { modal } from './modal.js';
// // eslint-disable-next-line import/no-cycle
// import { signOutSession } from '../lib/firebase.js';

export const navegations = (singOutFunction) => {
  const navegation = document.createElement('div');
  navegation.setAttribute('id', 'navegation');

  const logOutFeed = document.createElement('img');
  logOutFeed.setAttribute('src', 'img/logOut.png');
  logOutFeed.setAttribute('id', 'logOutFeed');
  const writeFeed = document.createElement('img');
  writeFeed.setAttribute('src', 'img/writePost.png');
  writeFeed.setAttribute('id', 'writeFeed');
  const homeFeed = document.createElement('img');
  homeFeed.setAttribute('src', 'img/Home.png');
  homeFeed.setAttribute('id', 'homeFeed');
  const profileFeed = document.createElement('img');
  profileFeed.setAttribute('id', 'profileFeed');
  profileFeed.setAttribute('src', 'img/Profile.png');

  navegation.append(logOutFeed, writeFeed, homeFeed, profileFeed);

  logOutFeed.addEventListener('click', (e) => {
    e.preventDefault();
    singOutFunction();
  });

  return navegation;
};
