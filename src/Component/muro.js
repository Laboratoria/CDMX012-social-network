import { onNavigate } from '../main.js';
import { cerrar } from '../lib/index.js';

export const muro = () => {
  const seccionMuro = document.createElement('section');

  const logoYummi = document.createElement('IMG');
  logoYummi.src = './images/logo.png';
  logoYummi.setAttribute('id', 'logoinicio');
  logoYummi.setAttribute('alt', 'Yummy, bienvenido a tu mundo de cocina');

  const parrafo = document.createElement('h1');
  parrafo.textContent = 'Algo bueno se esta cocinando...';
  const mensajeLogin = document.createElement('h1');
  mensajeLogin.setAttribute('id', 'mensajeLogin');

  const btnCerrarSesion = document.createElement('button');
  btnCerrarSesion.setAttribute('type', 'button');
  btnCerrarSesion.setAttribute('class', 'botones');
  btnCerrarSesion.setAttribute('id', 'btnCerrarSesion');
  btnCerrarSesion.textContent = 'Cerrar Sesion';
  btnCerrarSesion.addEventListener('click', () => {
    cerrar();
    onNavigate('/');
  });

  seccionMuro.append(logoYummi, parrafo, mensajeLogin, btnCerrarSesion);
  return seccionMuro;
};
