/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { post } from '../database/firestore.js';
import { logOut } from '../database/firebase.js';

// window.addEventListener('DOMContentLoaded', async () => {
//   const querySnapshot = await getShares();
//   console.log(querySnapshot);
// });

export const home = () => {
  const divHome = document.createElement('div');
  const inputHome = document.createElement('input');
  const buttonHome = document.createElement('button');
  const buttonLogOut = document.createElement('button');
  divHome.setAttribute('id', 'divHome');
  inputHome.setAttribute('id', 'inputHome');
  buttonLogOut.setAttribute('id', 'buttonLogOut');
  divHome.appendChild(inputHome);
  divHome.appendChild(buttonHome);
  divHome.appendChild(buttonLogOut);

  buttonHome.textContent = 'Click here';
  buttonLogOut.textContent = 'LOGOUT';
  buttonHome.addEventListener('click', () => {
    onNavigate('/home');
    const toShare = inputHome.value;
    post(toShare);
  });

  buttonLogOut.addEventListener('click', () => {
    logOut().then(() => {
      onNavigate('/');
    });
  });

  return divHome;
};
