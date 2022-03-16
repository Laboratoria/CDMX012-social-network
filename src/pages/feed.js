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
  configMenu.setAttribute('src', './assets/icons8-menú-30.png');
  configMenu.setAttribute('alt', 'configuration menu');

  header.append(logo, bookreads, configMenu);

  // Create a new post section
  const readingForm = document.createElement('form');
  readingForm.setAttribute('class', 'reading-form');
  readingForm.setAttribute('id', 'readingForm');

  const readingTitle = document.createElement('div');
  readingTitle.innerHTML = '<label for="reading" class="reading">Reading:</label>';

  const readingBook = document.createElement('input');
  readingBook.setAttribute('class', 'book-title');
  readingBook.setAttribute('id', 'bookTitle');
  readingBook.setAttribute('type', 'text');
  readingBook.setAttribute('placeholder', 'Insert the title of the book you are reading here');

  const readingDescription = document.createElement('textarea');
  readingDescription.setAttribute('class', 'post-content');
  readingDescription.setAttribute('name', 'post-content');
  readingDescription.setAttribute('placeholder', "What's on your mind?");

  readingForm.append(readingTitle, readingBook, readingDescription);

  // Posts section
  const postsArea = document.createElement('div');
  postsArea.setAttribute('class', 'posts');
  postsArea.setAttribute('id', 'postsArea');

  readingPage.append(header, readingForm, postsArea);

  return readingPage;
};
