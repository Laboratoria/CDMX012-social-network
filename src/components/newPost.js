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
  inputPost.setAttribute('autocomplete', 'off');

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
    const currentDayOfMonth = datePost.getDate();
    const currentMonth = datePost.getMonth(); // Be careful! January is 0, not 1
    const currentYear = datePost.getFullYear();
    const currentHour = datePost.getHours();
    const currentMin = datePost.getMinutes();
    const dateString = currentHour + ':' + currentMin + '-' + currentDayOfMonth + '-' + (currentMonth + 1) + '-' + currentYear;
    const likeCount = [];
    if (textPost !== '') {
      savePost(textPost, dateString, likeCount);
      document.getElementById('inputPost').value = '';
      console.log(textPost, dateString, likeCount);
    } else {
      alert('Tu post esta vacío!');
    }
  });
  return writePost;
};
