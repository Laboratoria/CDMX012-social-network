// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { readData } from './FireStore.js';
import { newPost } from './newPost.js';

export const feed = () => {
  const feedView = document.createElement('div');
  feedView.setAttribute('id', 'feedView');

  const header = document.createElement('div');
  header.setAttribute('id', 'feedHeader');

  const logoFeed = document.createElement('img');
  logoFeed.setAttribute('src', 'img/Icono_.png');
  logoFeed.setAttribute('id', 'logoFeed');

  const searchFeed = document.createElement('input');
  searchFeed.setAttribute('class', 'register');
  searchFeed.setAttribute('id', 'searchFeed');
  searchFeed.setAttribute('placeholder', 'Buscar...');

  const newPostDiv = document.createElement('div');
  newPostDiv.setAttribute('id', 'newPostDiv');

  const createPost = newPost();
  createPost.setAttribute('id', 'createPost');

  const postFeed = document.createElement('div');
  postFeed.setAttribute('id', 'postFeed');

  const footer = document.createElement('div');
  footer.setAttribute('id', 'feedFooter');

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

  newPostDiv.appendChild(createPost);
  header.append(logoFeed, searchFeed);
  footer.append(logOutFeed, writeFeed, homeFeed, profileFeed);
  feedView.append(header, createPost, postFeed, footer);

  logOutFeed.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });
  readData();
  return feedView;
};
