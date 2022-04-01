import { savePost } from './FireStore.js';

export const newPost = () => {
  const writePost = document.createElement('div');
  writePost.setAttribute('class', 'sectionPost');
  writePost.setAttribute('id', 'writePost');

  const createTop = document.createElement('div');
  createTop.setAttribute('class', 'templateTop');

  const profilePic = document.createElement('img');
  profilePic.setAttribute('src', 'img/profilePicture.png');

  const namePost = document.createElement('label');
  namePost.setAttribute('class', 'profileName');
  namePost.textContent = 'Ana';

  const inputPost = document.createElement('input');
  inputPost.setAttribute('id', 'inputPost');
  inputPost.setAttribute('placeholder', '¿Que estas pensando?');

  const sendPost = document.createElement('button');
  sendPost.setAttribute('id', 'sendPost');
  sendPost.setAttribute('class', 'button');
  sendPost.textContent = 'Publicar';

  createTop.append(namePost, profilePic);
  writePost.append(createTop, inputPost, sendPost);

  sendPost.addEventListener('click', (e) => {
    e.preventDefault();
    const textPost = document.getElementById('inputPost').value;
    const datePost = new Date();
    console.log(textPost, datePost);
    savePost(textPost, datePost);
  });
  return writePost;
};
