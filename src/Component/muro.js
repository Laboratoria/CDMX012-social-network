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

  const btnCerrarSesion = document.createElement('button');// cerrar sesión cuenta
  btnCerrarSesion.setAttribute('type', 'button');
  btnCerrarSesion.setAttribute('class', 'botones');
  btnCerrarSesion.setAttribute('id', 'btnCerrarSesion');
  btnCerrarSesion.textContent = 'Cerrar Sesion';
  btnCerrarSesion.addEventListener('click', () => {
    cerrar();
    onNavigate('/');
  });
  const contenedorPadre = document.createElement('div');
  contenedorPadre.setAttribute('class', 'contmodal');
  contenedorPadre.setAttribute('id', 'contmodal');
  const contenedorModal = document.createElement('div');
  contenedorModal.setAttribute('class', 'modal1');
  contenedorModal.setAttribute('id', 'modal');
  const iconomal = document.createElement('IMG');
  iconomal.src = './images/tachecito.png';
  iconomal.setAttribute('id', 'iconomal');
  iconomal.setAttribute('alt', 'incorrecto');
  const mensajemal = document.createElement('h1');
  mensajemal.setAttribute('class', 'mensajemal');
  mensajemal.textContent = 'Verifica tu información';
  const btnVolver = document.createElement('button');
  btnVolver.setAttribute('id', 'botonVolver');
  btnVolver.setAttribute('class', 'botones');
  btnVolver.textContent = 'Volver';
  contenedorModal.append(iconomal, mensajemal, btnVolver);
  const btnMostrarModal = document.createElement('button');
  const mostrarModal = document.createElement('a');
  mostrarModal.textContent = 'Ver';
  mostrarModal.setAttribute('href', '#contmodal');
  btnMostrarModal.appendChild(mostrarModal);
  contenedorPadre.appendChild(contenedorModal);
  seccionMuro.append(logoYummi, parrafo, mensajeLogin, btnCerrarSesion, contenedorPadre, btnMostrarModal);
  return seccionMuro;
};
