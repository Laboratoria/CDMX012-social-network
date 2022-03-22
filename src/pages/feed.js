/* eslint-disable import/no-cycle */
import { saveNewPostData, getPosts } from '../lib/posts.js';
import { slideshow } from '../slideshow.js';

export const feed = () => {
  const readingPage = document.createElement('div');
  readingPage.setAttribute('class', 'readingPage');

  // Header section
  const header = document.createElement('header');
  header.setAttribute('class', 'feed-header');

  const logo = document.createElement('img');
  logo.setAttribute('class', 'logo-book-feed');
  logo.setAttribute('src', './assets/logo sin fondo 1.png');
  logo.setAttribute('alt', 'logo book reads');

  const bookreads = document.createElement('img');
  bookreads.setAttribute('class', 'titleBookReads-feed');
  bookreads.setAttribute('src', './assets/nombre_sin_fondo-removebg-preview 1.png');
  bookreads.setAttribute('alt', 'titleBookReads');

  const configMenu = document.createElement('img');
  configMenu.setAttribute('class', 'config-menu');
  configMenu.setAttribute('src', './assets/hamburgerMenu.png');
  configMenu.setAttribute('alt', 'configuration menu');

  header.append(logo, bookreads, configMenu);

  // book suggestions h2
  const suggestions = document.createElement('div');
  const bookSuggest = document.createElement('h2');
  bookSuggest.setAttribute('class', 'bookSuggest');
  bookSuggest.innerHTML = 'Book suggestions:';
  suggestions.append(bookSuggest);

  // Create a new post section
  const readingForm = document.createElement('form');
  readingForm.setAttribute('class', 'reading-form');
  readingForm.setAttribute('id', 'readingForm');

  const readingTitle = document.createElement('div');
  readingTitle.innerHTML = '<label for="reading" class="reading book-title">Reading:</label>';

  const readingBook = document.createElement('input');
  readingBook.setAttribute('class', 'book-title');
  readingBook.setAttribute('id', 'bookTitle');
  readingBook.setAttribute('type', 'text');
  readingBook.setAttribute('placeholder', 'Insert the title of the book you are reading here');
  readingBook.setAttribute('name', 'bookTitle');

  const readingDescription = document.createElement('textarea');
  readingDescription.setAttribute('class', 'post-content');
  readingDescription.setAttribute('name', 'postContent');
  readingDescription.setAttribute('placeholder', "What's on your mind?");

  const newPostBtn = document.createElement('input');
  newPostBtn.setAttribute('type', 'button');
  newPostBtn.setAttribute('value', 'Share');
  newPostBtn.setAttribute('class', 'new-post-button');
  newPostBtn.setAttribute('id', 'newPostButton');

  readingForm.append(readingTitle, readingBook, readingDescription, newPostBtn);

  // Área para mostrar el post recién creado
  const newPost = document.createElement('div');
  newPost.setAttribute('class', 'new-post');
  newPost.setAttribute('id', 'newPost');

  // Posts section
  const postsArea = document.createElement('div');
  postsArea.setAttribute('class', 'posts');
  postsArea.setAttribute('id', 'postsArea');

  const slideshowElement = slideshow();
  readingPage.append(header, suggestions, slideshowElement, readingForm, newPost, postsArea);

  document.addEventListener('DOMContentLoaded', getPosts()); // Averiguar cómo ordenar los posts, más reciente primero

  newPostBtn.addEventListener('click', () => {
    saveNewPostData(readingForm);
  });

  return readingPage;
};
