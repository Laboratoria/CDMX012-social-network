import { toEditable } from './edit-post.js';
import { deletePost } from '../lib/deletePost.js';
import { like as likeComponent } from './like.js';
import { currentUser } from '../lib/likes.js';

export const createPosts = (postData, currentUid, name, username) => {
  const post = document.createElement('article');
  post.setAttribute('class', 'post-container');
  const infoUserPost = document.createElement('div');
  infoUserPost.setAttribute('class', 'info-user-post');
  /* const line = document.createElement('hr'); */
  const info = document.createElement('div');
  info.setAttribute('class', 'info');

  const nameProfile = document.createElement('p');
  nameProfile.setAttribute('class', 'nameProfile-P');
  nameProfile.innerHTML = `<strong>${name}</strong>`;

  const userName = document.createElement('p');
  userName.setAttribute('class', 'userName-P');
  userName.innerHTML = `@${username}`;

  const date = document.createElement('span');
  date.setAttribute('class', 'date-P');
  date.innerHTML = `· ${postData.date}`;

  info.append(nameProfile, userName, date);
  infoUserPost.append(/* line, */ info);

  const nodeTobeEdited = document.createElement('div');
  nodeTobeEdited.setAttribute('class', 'to-edit');
  nodeTobeEdited.innerHTML = `<div class="post-content">
    <div><img src= "./assets/open-book.png" class= "book-icon"><p><strong>  ${postData.reading}</strong></p></div> <br>
    <p>${postData.text}</p>
    <div>`;

  // ¿le di like a un post?
  let doIlikePost = false;
  console.log(postData.likes);
  const sessionUser = currentUser();
  console.log(sessionUser.uid);
  if (postData.likes.includes(sessionUser.uid)) {
    doIlikePost = true;
  }
  const like = likeComponent(
    doIlikePost,
    postData.likes.length,
    sessionUser.uid,
    postData.key,
    postData.likes,
  );

  if (currentUid === postData.uid) {
    const options = document.createElement('img');
    options.setAttribute('class', 'options-menu');
    options.setAttribute('src', './assets/options.png');
    options.setAttribute('height', '20');

    info.append(options);

    const dropdownContainer = document.createElement('div');
    dropdownContainer.setAttribute('class', 'dropdown-container');
    dropdownContainer.setAttribute('tabindex', '-1');

    const editDeletContainer = document.createElement('div');
    editDeletContainer.setAttribute('class', 'dropdown');

    const editP = document.createElement('a');
    editP.setAttribute('href', '#');
    editP.setAttribute('class', 'editPost');
    editP.setAttribute('id', 'editPost');

    editP.innerHTML = '<div>Edit</div>';

    const deleteP = document.createElement('a');
    deleteP.setAttribute('href', '#');
    deleteP.setAttribute('class', 'deletePost');
    deleteP.setAttribute('id', 'deletePost');

    deleteP.innerHTML = '<div>Delete</div>';

    editDeletContainer.append(editP, deleteP);
    dropdownContainer.append(editDeletContainer);

    options.addEventListener('click', () => {
      dropdownContainer.classList.toggle('show');

      deleteP.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownContainer.classList.toggle('show'); // Agregue nuevamente esta linea aquí para que al dar click en Delete el dropdowm desaparezca
        const result = window.confirm('Are you sure you want to delete this post?');
        if (result) {
          deletePost(postData.key);
        }
      });
    });

    post.append(infoUserPost, nodeTobeEdited, like, dropdownContainer);
    const postArea = document.querySelector('#postsArea');
    postArea.append(post);

    editP.addEventListener('click', (e) => {
      e.preventDefault();
      toEditable(postData, nodeTobeEdited);
      dropdownContainer.classList.toggle('show');
    });

    return postArea;
  }

  post.append(infoUserPost, nodeTobeEdited, like);
  const postArea = document.querySelector('#postsArea');
  postArea.append(post);

  return postArea;
};
