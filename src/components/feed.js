// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { templatePost } from './post.js';


export const feed = () => {
  const feedView = document.createElement('div');
  feedView.setAttribute('id', 'feedView');
  const containerFeed = document.createElement('div');
  containerFeed.setAttribute('id', 'containerFeed');

  const header = document.createElement('div');
  header.setAttribute('id', 'feedHeader');

  const logoFeed = document.createElement('img');
  logoFeed.setAttribute('src', 'img/Icono_.png');
  logoFeed.setAttribute('id', 'logoFeed');

  const searchFeed = document.createElement('input');
  searchFeed.setAttribute('class', 'register');
  searchFeed.setAttribute('id', 'searchFeed');
  searchFeed.setAttribute('placeholder', 'Buscar...');

  const postFeed = document.createElement('section');
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
  const divPost = templatePost();
  header.appendChild(logoFeed);
  header.appendChild(searchFeed);
  postFeed.appendChild(divPost);
  containerFeed.appendChild(header);
  containerFeed.appendChild(postFeed);
  footer.appendChild(logOutFeed);
  footer.appendChild(writeFeed);
  footer.appendChild(homeFeed);
  footer.appendChild(profileFeed);
  containerFeed.appendChild(footer);
  feedView.appendChild(containerFeed);

  logOutFeed.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });
  return feedView;
};
