// eslint-disable-next-line import/no-cycle
//import { onNavigate } from '../app.js';

import {usernameValidation, isValidField, saveInfo} from '../firestore.js'

export const addInfoPage = () => {
  const addInfoContent = document.createElement('div');
  addInfoContent.setAttribute('class', 'lp-content');

  const lpImage = document.createElement('div');
  lpImage.setAttribute('class', 'landing-page-img');

  const addInfoContainer = document.createElement('div');
  addInfoContainer.setAttribute('class', 'addInfo-container');

  const addInfoTitle = document.createElement('h2');
  addInfoTitle.innerHTML = 'Add Info';

  const addInfoForm = document.createElement('form');
  addInfoForm.setAttribute('class', 'addInfo-form'); //
  addInfoForm.setAttribute('id', 'signUpForm');

  const profileNameField = document.createElement('div');
  profileNameField.setAttribute('class', 'label-icon'); //
  profileNameField.innerHTML = `
    <img class="mail" src='./assets/icons8-usuario-48 1.png' alt="name"/>
    <label for="name" class="e-mail">Profile name</label>`;

  const txtProfileName = document.createElement('input');
  txtProfileName.setAttribute('name', 'name');
  txtProfileName.setAttribute('type', 'text');
  txtProfileName.setAttribute('placeholder', 'Write down your name');
  txtProfileName.required = 'true';
  txtProfileName.id = 'txtProfilename';

  const usernameField = document.createElement('div');
  usernameField.setAttribute('class', 'label-icon'); //
  usernameField.innerHTML = `
    <img class="mail" src='./assets/arroba.png' alt="user"/>
    <label for="username" class="e-mail">Username</label>`;

  const txtUsername = document.createElement('input');
  txtUsername.setAttribute('name', 'username');
  txtUsername.setAttribute('type', 'text');
  txtUsername.setAttribute('placeholder', 'Write down your username ');
  txtUsername.required = 'true';
  txtUsername.id = 'txtusername';

  const errorUsername = document.createElement('p');
  errorUsername.setAttribute('id', 'errorAreaUsername');

  const bioField = document.createElement('div');
  bioField.setAttribute('class', 'label-icon'); //
  bioField.innerHTML = `
    <img class="mail" src='./assets/bio.png' alt="bio"/>
    <label for="bio" class="e-mail">Bio</label>`;

  const txtareaBio = document.createElement('textarea');
  txtareaBio.setAttribute('name', 'bio');
  txtareaBio.setAttribute('placeholder', 'Write down your bio');

  addInfoForm.append(profileNameField, txtProfileName, usernameField, txtUsername, errorUsername, bioField, txtareaBio);

  const errorForm = document.createElement('p');
  errorForm.setAttribute('id', 'errorAreaForm');

  const btnAccept = document.createElement('input');
  btnAccept.setAttribute('type', 'button');
  btnAccept.setAttribute('class', 'btn-accept');
  btnAccept.setAttribute('value', 'Accept');

  addInfoContainer.append(addInfoTitle, addInfoForm, btnAccept, errorForm);

  // Username validation

  let isUsernameValid = false;

  txtUsername.addEventListener('change', (e) => {
    let usernameValue = e.target.value.trim();
    isUsernameValid = usernameValidation(usernameValue)
    
  })

  // Form validation

  btnAccept.addEventListener('click', (e) => {
    e.preventDefault();
    let isFormValid = isValidField(txtProfileName.value, txtUsername.value) && isUsernameValid;
    if (isFormValid){
        saveInfo(addInfoForm)
    }
  })

  addInfoContent.append(addInfoContainer, lpImage);

    return addInfoContent;
}