/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { share } from '../database/firestore.js';

// window.addEventListener('DOMContentLoaded', async () => {
//   const querySnapshot = await getShares();
//   console.log(querySnapshot);
// });

export const home = () => {
  const divHome = document.createElement('div');
  const inputHome = document.createElement('input');
  const buttonHome = document.createElement('button');
  divHome.setAttribute('id', 'divHome');
  inputHome.setAttribute('id', 'inputHome');
  divHome.appendChild(inputHome);
  divHome.appendChild(buttonHome);

  buttonHome.textContent = 'Click here';
  buttonHome.addEventListener('click', () => {
    onNavigate('/home');
    const toShare = inputHome.value;
    share(toShare);
  });

  return divHome;
};
