import { savePost } from './FireStore.js';

export const newPostModal = () => {
  const writePostModal = document.createElement('div');
  writePostModal.setAttribute('class', 'sectionPost');
  writePostModal.setAttribute('id', 'writePostModal');

  const createTop = document.createElement('div');
  createTop.setAttribute('class', 'templateTop');

  const profilePic = document.createElement('img');
  profilePic.setAttribute('src', 'img/profilePicture.png');

  const namePost = document.createElement('label');
  namePost.setAttribute('class', 'profileName');
  namePost.textContent = 'Ana';

  const inputPostModal = document.createElement('input');
  inputPostModal.setAttribute('id', 'inputPostModal');
  inputPostModal.setAttribute('placeholder', '¿Que estas pensando?');
  inputPostModal.setAttribute('autocomplete', 'off');

  const sendPostModal = document.createElement('button');
  sendPostModal.setAttribute('id', 'sendPostModal');
  sendPostModal.setAttribute('class', 'button');
  sendPostModal.textContent = 'Publicar';

  createTop.append(namePost, profilePic);
  writePostModal.append(createTop, inputPostModal, sendPostModal);

  sendPostModal.addEventListener('click', (e) => {
    e.preventDefault();
    const textPost = document.getElementById('inputPostModal').value;
    const datePost = new Date();
    const currentDayOfMonth = datePost.getDate();
    const currentMonth = datePost.getMonth(); // Be careful! January is 0, not 1
    const currentYear = datePost.getFullYear();
    const currentHour = datePost.getHours();
    const currentMin = datePost.getMinutes();
    // eslint-disable-next-line prefer-template
    const dateString = currentHour + ':' + currentMin + '-' + currentDayOfMonth + '-' + (currentMonth + 1) + '-' + currentYear;
    const likeCount = [];
    if (textPost !== '') {
      savePost(textPost, dateString, likeCount);
      document.getElementById('inputPostModal').value = '';
      console.log(textPost, dateString, likeCount);
    } else {
      alert('Tu post esta vacío!');
    }
  });
  return writePostModal;
};
