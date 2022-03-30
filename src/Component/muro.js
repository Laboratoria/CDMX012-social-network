import { onNavigate } from '../main.js';
import { cerrar, user } from '../lib/index.js';

import { GetPost } from './post/GetPost.js';
import { guardarReceta } from '../lib/firestore.js';
// import { deletePost } from './post/DeletePost.js';

export const muro = () => {
  const seccionMuro = document.createElement('section');
  seccionMuro.setAttribute('id', 'seccionMuro');
  // Head
  const cabeza = document.createElement('nav');
  cabeza.setAttribute('id', 'cabeza');
  const logoYummi = document.createElement('IMG');
  logoYummi.src = './images/logo.png';
  logoYummi.setAttribute('id', 'logoMuro');
  logoYummi.setAttribute('alt', 'Yummy, bienvenido a tu mundo de cocina');
  const buscador = document.createElement('input');
  buscador.setAttribute('type', 'search');
  buscador.setAttribute('id', 'buscador');
  const lupa = document.createElement('button');
  lupa.setAttribute('id', 'lupita');
  const lupaImg = document.createElement('IMG');
  lupaImg.setAttribute('id', 'lupaimg');
  lupaImg.src = '../images/lupa.png';
  lupa.appendChild(lupaImg);
  const filtrador = document.createElement('select');
  filtrador.setAttribute('id', 'filtrador');
  const filtrarPor = document.createElement('option');
  filtrarPor.textContent = 'Filtrar por';
  filtrador.append(filtrarPor);
  cabeza.append(logoYummi, buscador, lupa, filtrador);

  const contenedorPerfil = document.createElement('article');
  contenedorPerfil.setAttribute('id', 'contenedorPerfil');
  const perfilCaja = document.createElement('section');
  perfilCaja.setAttribute('id', 'perfilCaja');
  const cajaPortada = document.createElement('div');
  cajaPortada.setAttribute('id', 'cajaPortada');
  const fotoPortada = document.createElement('IMG');
  fotoPortada.setAttribute('id', 'fotoPortada');
  fotoPortada.src = '../images/portada.png';
  const cajaFoto = document.createElement('div');
  cajaFoto.setAttribute('id', 'cajaFoto');
  const usuarioImg = document.createElement('IMG');
  usuarioImg.src = '../images/fotoperfil.png';
  usuarioImg.setAttribute('id', 'fotousuario');
  const nombreUser = document.createElement('h1');
  nombreUser.setAttribute('id', 'nombreUser');
  nombreUser.textContent = user;
  const cerrarSesionImg = document.createElement('IMG');
  cerrarSesionImg.src = '../images/puerta.png';
  cerrarSesionImg.setAttribute('id', 'cerrarSesionImg');
  const btnCerrarSesion = document.createElement('button');// cerrar sesión cuenta
  btnCerrarSesion.setAttribute('type', 'button');
  // btnCerrarSesion.setAttribute('class', 'botones');
  btnCerrarSesion.setAttribute('id', 'btnCerrarSesion');
  btnCerrarSesion.textContent = 'Cerrar Sesion';
  btnCerrarSesion.appendChild(cerrarSesionImg);
  btnCerrarSesion.addEventListener('click', () => {
    cerrar();
    onNavigate('/');
  });
  const publicar = document.createElement('fieldset');
  publicar.setAttribute('id', 'publicar');
  const fotoUsuarioP = document.createElement('IMG');
  fotoUsuarioP.src = '../images/fotoperfil.png';
  fotoUsuarioP.setAttribute('id', 'usuarioPublicar');
  const botonPublicar = document.createElement('button');
  botonPublicar.setAttribute('id', 'btnPublicar');
  botonPublicar.textContent = 'Comparte una nueva receta ...';
  publicar.append(fotoUsuarioP, botonPublicar);
  cajaPortada.appendChild(fotoPortada);
  cajaFoto.appendChild(usuarioImg);
  perfilCaja.append(cajaPortada, cajaFoto, nombreUser, btnCerrarSesion);
  contenedorPerfil.appendChild(perfilCaja);

  const formPublicacion = document.createElement('form');
  formPublicacion.setAttribute('id', 'formPublicacion');
  const labelReceta = document.createElement('label');
  labelReceta.setAttribute('id', 'labelReceta');
  labelReceta.textContent = 'Nombre Receta';
  const inputReceta = document.createElement('input');
  inputReceta.setAttribute('id', 'inputReceta');
  inputReceta.setAttribute('type', 'text');
  inputReceta.setAttribute('placeholder', 'Nombre de receta');
  const labelIngredientes = document.createElement('label');
  labelIngredientes.setAttribute('id', 'labelIngredientes');
  labelIngredientes.textContent = 'Lista de ingredientes';
  const inputIngredientes = document.createElement('input');
  inputIngredientes.setAttribute('id', 'inputIngredientes');
  inputIngredientes.setAttribute('placeholder', 'Lista de ingredientes');
  const labelProcedimiento = document.createElement('label');
  labelProcedimiento.textContent = 'Procedimiento de la receta';
  const inputProcedimiento = document.createElement('input');
  inputProcedimiento.setAttribute('id', 'inputProcedimiento');
  inputProcedimiento.setAttribute('placeholder', 'Procedimiento');
  inputProcedimiento.setAttribute('type', 'text');
  const selectCategoria = document.createElement('select');
  selectCategoria.setAttribute('id', 'selectCategoria');
  const catSalado = document.createElement('option');
  catSalado.textContent = 'Salado';
  catSalado.setAttribute('value', 'salado');
  const catSaladoImg = document.createElement('IMG');
  catSaladoImg.src = '../images/buebito.png';
  catSaladoImg.setAttribute('class', 'catSaladoImg');
  catSalado.appendChild(catSaladoImg);
  const catDulce = document.createElement('option');
  catDulce.textContent = 'Dulce';
  catDulce.setAttribute('value', 'dulce');
  const catDulceImg = document.createElement('IMG');
  catDulceImg.src = '../images/Dulce.png';
  catDulce.appendChild(catDulceImg);
  const catVegano = document.createElement('option');
  catVegano.textContent = 'Vegano';
  catVegano.setAttribute('value', 'vegano');
  const catVeganoImg = document.createElement('IMG');
  catVeganoImg.src = '../images/PolloVegano.png';
  selectCategoria.append(catSalado, catDulce, catVegano);
  const btnPublicar = document.createElement('button');
  btnPublicar.textContent = 'Publicar';
  btnPublicar.setAttribute('id', 'btnPostear');
  btnPublicar.addEventListener('click', () => {
    // eslint-disable-next-line max-len
    guardarReceta(inputReceta.value, inputIngredientes.value, inputProcedimiento.value, selectCategoria.value);
    formPublicacion.style.visibility = 'hidden';
  });
  const cerrarModal = document.createElement('button');
  cerrarModal.setAttribute('id', 'cerrarModal');
  cerrarModal.textContent = 'X';
  cerrarModal.addEventListener('click', (e) => {
    e.preventDefault();
    formPublicacion.style.visibility = 'hidden';
  });
 /*  const postPublicado = document.createElement('div');
  postPublicado.setAttribute('id', 'postPublicado2'); */

  // eslint-disable-next-line max-len
  formPublicacion.append(cerrarModal, labelReceta, inputReceta, labelIngredientes, inputIngredientes, labelProcedimiento, inputProcedimiento, selectCategoria, btnPublicar);
  seccionMuro.append(cabeza, publicar, contenedorPerfil, formPublicacion, GetPost());
  botonPublicar.addEventListener('click', () => {
    formPublicacion.style.visibility = 'visible';
  });
  return seccionMuro;
};
