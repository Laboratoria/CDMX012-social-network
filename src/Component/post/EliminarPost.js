import { borrarReceta  } from '../../lib/firestore.js';

export const eliminarPost = (elbrenditoid) => {
  const contenedorPadre = document.createElement('div');
  contenedorPadre.setAttribute('class', 'contmodal');
  contenedorPadre.setAttribute('id', 'contmodal');
  const contenedorModal = document.createElement('div');
  contenedorModal.setAttribute('class', 'modal1');
  contenedorModal.setAttribute('id', 'modal');
  const mensajeConfirmacion = document.createElement('h1');
  mensajeConfirmacion.setAttribute('class', 'mensajemal');
  mensajeConfirmacion.setAttribute('id', 'mensajemal');
  mensajeConfirmacion.textContent = '¿Estas seguro?';
  const btnVolver = document.createElement('button');
  btnVolver.setAttribute('id', 'botonVolver');
  btnVolver.setAttribute('class', 'botones');
  btnVolver.textContent = 'Cancelar';
  const cerrarModal = document.createElement('a');
  cerrarModal.textContent = 'Volver';
  cerrarModal.setAttribute('href', '');
  // HGH
  const confirmar = document.createElement('button');
  confirmar.setAttribute('data-id', elbrenditoid);
  confirmar.textContent = 'Aceptar';
  console.log(elbrenditoid);
  confirmar.addEventListener('click', (e) => {
    e.preventDefault();
    borrarReceta(elbrenditoid);
  });
  // AQUI VA LA FUNCIÓN DE CONFIRMAR
  contenedorModal.append(mensajeConfirmacion, btnVolver, confirmar);
  const btnMostrarModal = document.createElement('button');
  const mostrarModal = document.createElement('a');
  mostrarModal.textContent = 'Ver';
  mostrarModal.setAttribute('href', '#contmodal');
  btnVolver.appendChild(cerrarModal);
  btnMostrarModal.appendChild(mostrarModal);
  contenedorModal.append(mensajeConfirmacion, btnVolver, confirmar);
  contenedorPadre.appendChild(contenedorModal);
  return contenedorPadre;
};
