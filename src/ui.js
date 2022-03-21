/* eslint-disable import/no-cycle */
/* import { userData } from './lib/posts.js';
import { onSnapshot } from './firebase-imports.js'; */

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

export const createNewPost = (postData, name, username) => {
  const post = document.createElement('article');
  post.setAttribute('class', 'post-container');
  post.innerHTML = ` <hr>
    ${name} @${username} <span>· ${postData.date}</span> <br>
    Reading: ${postData.reading} <br>
    ${postData.text}
    `;

  const like = document.createElement('img');
  like.setAttribute('src', './assets/like.png');

  const options = document.createElement('img');
  options.setAttribute('src', './assets/options.png');
  options.setAttribute('height', '20');

  post.append(like, options);
  const newPost = document.querySelector('#newPost');
  newPost.append(post);

  return newPost;
};

export const showAllPosts = (postData, currentUid, name, username) => {
  const post = document.createElement('article');
  post.setAttribute('class', 'post-container');
  post.innerHTML = ` <hr>
    ${name} @${username} <span>· ${postData.date}</span> <br> 
    Reading: ${postData.reading} <br> 
    ${postData.text} 
    `;

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
    dropdownContainer.innerHTML = `
        <div class="dropdown">
          <a href="#" id='edit'><div>Edit</div></a>
          <a href="#"><div>Delete</div></a>
        </div>
      `;

    options.addEventListener('click', () => {
      dropdownContainer.classList.toggle('show');
    });

    post.append(like, options, dropdownContainer);
    const postArea = document.querySelector('#postsArea');
    postArea.append(post);

    // const edit = document.querySelector('#edit');
    dropdownContainer.addEventListener('click', () => {
      console.log(postData);
    });

    return postArea;
  }

  post.append(like);
  const postArea = document.querySelector('#postsArea');
  postArea.append(post);

  return postArea;
};
