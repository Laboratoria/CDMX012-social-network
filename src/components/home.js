/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const home = () => {
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Click here';
  buttonHome.addEventListener('click', () => {
    onNavigate('/home');
  });

  return buttonHome;
};
