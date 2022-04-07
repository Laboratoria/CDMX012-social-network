// eslint-disable-next-line import/no-cycle
// // import { onNavigate } from '../main.js';
// import { modal } from './modal.js';
// // eslint-disable-next-line import/no-cycle
// import { signOutSession } from '../lib/firebase.js';
import { newPostModal } from './newPostModal.js';

export function NewPostModal() {
  const divModal = document.createElement('div');
  divModal.setAttribute('id', 'postModal');
  divModal.setAttribute('class', 'modal');
  divModal.setAttribute('style', 'display:block');
  const divModalContent = document.createElement('div');
  divModalContent.setAttribute('class', 'modal-content');
  const spanClose = document.createElement('span');
  spanClose.innerHTML = '&times;';
  spanClose.setAttribute('class', 'close');
  spanClose.addEventListener('click', () => {
    const feedView = document.getElementById('feedView');
    feedView.removeChild(divModal);
  });

  divModal.append(divModalContent);
  divModalContent.append(spanClose);

  const createPost = newPostModal();
  createPost.setAttribute('id', 'createPostModal');
  divModalContent.append(createPost);

  const feedView = document.getElementById('feedView');
  feedView.append(divModal);
}

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

  writeFeed.addEventListener('click', (e) => {
    e.preventDefault();
    NewPostModal();
  });

  return navegation;
};
