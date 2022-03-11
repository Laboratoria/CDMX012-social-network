// eslint-disable-next-line import/no-cycle
//import { onNavigate } from '../app.js';

export const addInfoPage = () => {
  const addInfoContent = document.createElement('div');
  addInfoContent.setAttribute('class', 'lp-content');

  const lpImage = document.createElement('div');
  lpImage.setAttribute('class', 'landing-page-img');

  const addInfoContainer = document.createElement('div');
  addInfoContainer.setAttribute('class', 'createAccount-container');

  const addInfoTitle = document.createElement('h2');
  addInfoTitle.setAttribute('class', 'account-title');
  addInfoTitle.innerHTML = 'Add Info';

  const addInfoForm = document.createElement('form');
  addInfoForm.setAttribute('class', 'account-form');
  addInfoForm.setAttribute('id', 'signUpForm');

  const profileNameField = document.createElement('div');
  profileNameField.setAttribute('class', 'label-icon');
  profileNameField.innerHTML = `
    <img class="mail" src='./assets/icons8-usuario-48 1.png' alt="name"/>
    <label for="name" class="e-mail">Profile name</label>`;

  const txtProfileName = document.createElement('input');
  txtProfileName.setAttribute('name', 'name');
  txtProfileName.setAttribute('class', 'e-mail');
  txtProfileName.setAttribute('type', 'text');
  txtProfileName.setAttribute('placeholder', 'Write down your name');
  txtProfileName.required = 'true';
  txtProfileName.id = 'txtEmail';

  const usernameField = document.createElement('div');
  usernameField.setAttribute('class', 'label-icon');
  usernameField.innerHTML = `
    <img class="mail" src='./assets/arroba.png' alt="user"/>
    <label for="username" class="e-mail">Username</label>`;

  const txtUsername = document.createElement('input');
  txtUsername.setAttribute('name', 'username');
  txtUsername.setAttribute('class', 'e-mail');
  txtUsername.setAttribute('type', 'text');
  txtUsername.setAttribute('placeholder', 'Write down your username ');
  txtUsername.required = 'true';
  txtUsername.id = 'txtEmail';

  const bioField = document.createElement('div');
  bioField.setAttribute('class', 'label-icon');
  bioField.innerHTML = `
    <img class="mail" src='./assets/bio.png' alt="bio"/>
    <label for="bio" class="e-mail">Bio</label>`;

  const txtareaBio = document.createElement('textarea');
  txtareaBio.setAttribute('name', 'bio');
  txtareaBio.setAttribute('class', 'e-mail');
  txtareaBio.setAttribute('placeholder', 'Write down your bio');
  txtareaBio.id = 'txtEmail';

  addInfoForm.append(profileNameField, txtProfileName, usernameField, txtUsername, bioField, txtareaBio);

//   const errorSection = document.createElement('p');
//   errorSection.setAttribute('class', 'error show-error-msg');
//   errorSection.setAttribute('id', 'errorArea');

  const btnAccept = document.createElement('input');
  btnAccept.setAttribute('type', 'button');
  btnAccept.setAttribute('class', 'btn-signUp');
  btnAccept.setAttribute('id', 'btn-signUp');
  btnAccept.setAttribute('value', 'Accept');

  addInfoContainer.append(addInfoTitle, addInfoForm, btnAccept);

//   txtPassword.addEventListener('keyup', () => showIncorrectPass());
//   passwordConf.addEventListener('keyup', () => showIncorrectPass());


//   // Funcionalidad de sign up with email
//   btnSignUp.addEventListener('click', () => {
//     const email = document.getElementById('txtEmail').value;
//     const password = document.getElementById('txtPassword').value;

//     const errorA = document.getElementById('errorArea');
//     const form = document.getElementById('signUpForm');

//     createAccount(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user);
//         errorA.innerHTML = '';
//         form.reset();
//       })
//       .catch((error) => {
//         console.log(error);
//         showSignUpError(error);
//       });
//   });


  addInfoContent.append(addInfoContainer, lpImage);

    return addInfoContent;
}