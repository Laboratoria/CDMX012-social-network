// eslint-disable-next-line import/no-cycle
import { readData } from './FireStore.js';
import { newPost } from './newPost.js';
// eslint-disable-next-line import/no-cycle
import { navegations } from './navegation.js';
// import { navegations, postModal } from './navegation.js';
// eslint-disable-next-line import/no-cycle
import { signOutSession } from '../lib/firebase.js';

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
  // este contenedor va a recibir el componente del modal que esta en el archivo
  // de modal.js

  const navDesktop = navegations(signOutSession);
  navDesktop.setAttribute('id', 'navDesktop');
  const navMobile = navegations(signOutSession);
  navMobile.setAttribute('id', 'navMobile');

  footer.append(navMobile);
  newPostDiv.appendChild(createPost);
  header.append(logoFeed, searchFeed, navDesktop);
  feedView.append(header, createPost, postFeed, footer);

  // esta función permite que el usuario salga de sesión

  readData();
  return feedView;
};
