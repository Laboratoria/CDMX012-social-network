import { borrarReceta  } from '../../lib/firestore.js';
import { doc } from  'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

export const eliminarPost = () => {
  console.log('si jala');
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
  confirmar.textContent = 'Aceptar';
  //confirmar.addEventListener('click', ({ target: { dataset } }) => {
    //console.log('Holi canoli');
    //console.log(dataset.id);
    // borrarReceta(dataset.id);
  // });
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
