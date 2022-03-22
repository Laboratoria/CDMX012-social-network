/* eslint-disable import/no-cycle */
/* import { userData } from './lib/posts.js';
import { onSnapshot } from './firebase-imports.js'; */
import { toEditable } from './lib/edit-post.js';
import { deletePost } from './lib/deletePost.js';

export const showSignUpError = (error) => {
  const errorArea = document.querySelector('#errorArea');

  if (error.code === 'auth/email-already-in-use') {
    errorArea.innerHTML = 'This e-mail address has already been registered.';
  } else if (error.code === 'auth/invalid-email') {
    errorArea.innerHTML = 'Invalid e-mail address, please try another one.';
  } else if (error.code === 'auth/weak-password') {
    errorArea.innerHTML = 'Your password must be at least 6 characters long.';
  }
};

export const showIncorrectPass = () => {
  const pass1 = document.getElementById('txtPassword').value;
  const pass2 = document.getElementById('passwordConfirm').value;
  const errorArea = document.querySelector('#errorArea');
  const signUpButton = document.querySelector('.btn-signUp');

  if (pass1 !== pass2) {
    errorArea.innerHTML = 'Passwords do not match';
    signUpButton.disabled = true;
  } else if (pass1 === pass2) {
    errorArea.innerHTML = '';
    signUpButton.disabled = false;
  }
};

export const showPassword = (pass, eyeIcon) => {
  const pass1 = pass;
  const eyeIcon1 = eyeIcon;

  if (pass1.type === 'password') {
    pass1.type = 'text';
    eyeIcon1.innerText = 'visibility_off';
  } else {
    pass1.type = 'password';
    eyeIcon1.innerText = 'visibility';
  }
};

// username error messages add-info
export const usernameError = () => {
  const errorArea1 = document.querySelector('#errorAreaUsername');
  const errorArea2 = document.querySelector('#errorAreaForm');
  errorArea1.innerHTML = 'Invalid username';
  errorArea2.innerHTML = 'Usernames can only contain letters, numbers, . and _';
  errorArea1.style.color = 'red';
  errorArea2.style.color = 'red';
};

export const usernameTaken = () => {
  const errorArea = document.querySelector('#errorAreaUsername');
  const errorArea2 = document.querySelector('#errorAreaForm');
  errorArea.innerHTML = 'This username is already taken';
  errorArea2.innerHTML = '';
  errorArea.style.color = 'red';
};

export const validUsername = () => {
  const errorArea = document.querySelector('#errorAreaUsername');
  const errorArea2 = document.querySelector('#errorAreaForm');
  errorArea.innerHTML = 'Valid username';
  errorArea2.innerHTML = '';
  errorArea.style.color = 'green';
};

// form error message add-Info
export const emptyFields = () => {
  const errorArea = document.querySelector('#errorAreaForm');
  errorArea.innerHTML = 'Profile name and/or username cannot be empty';
  errorArea.style.color = 'red';
};

export const createPosts = (postData, currentUid, name, username) => {
  const post = document.createElement('article');
  post.setAttribute('class', 'post-container');
  const infoUserPost = document.createElement('div');
  infoUserPost.innerHTML = ` <hr>
    ${name} @${username} <span>· ${postData.date}</span> <br>
    `;

  const nodeTobeEdited = document.createElement('div');
  nodeTobeEdited.setAttribute('id', 'to-edit');
  nodeTobeEdited.innerHTML = `<div id="post-content">
  <p>Reading: ${postData.reading}</p>
  <p>${postData.text}</p>
  <div>`;

  const like = document.createElement('img');
  like.setAttribute('src', './assets/like.png');

  if (currentUid === postData.uid) {
    const options = document.createElement('img');
    options.setAttribute('class', 'options-menu');
    options.setAttribute('src', './assets/options.png');
    options.setAttribute('height', '20');

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

      deleteP.addEventListener('click', () => {
        const result = window.confirm('Are you sure you want to delete this post?');
        if (result) {
          deletePost(postData.key);
        }
      });
    });

    post.append(infoUserPost, nodeTobeEdited, like, options, dropdownContainer);
    const postArea = document.querySelector('#postsArea');
    postArea.append(post);

    editP.addEventListener('click', (e) => {
      e.preventDefault();
      toEditable(postData, nodeTobeEdited);
    });

    return postArea;
  }

  post.append(infoUserPost, nodeTobeEdited, like);
  const postArea = document.querySelector('#postsArea');
  postArea.append(post);

  return postArea;
};
