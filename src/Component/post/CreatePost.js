import { guardarReceta } from '../../lib/firestore.js';

export const crearPost = () => {
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
  const inputIngredientes = document.createElement('textarea');
  inputIngredientes.setAttribute('id', 'inputIngredientes');
  inputIngredientes.setAttribute('placeholder', 'Lista de ingredientes');
  const labelProcedimiento = document.createElement('label');
  labelProcedimiento.textContent = 'Procedimiento de la receta';
  const inputProcedimiento = document.createElement('textarea');
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
  btnPublicar.addEventListener('click', (e) => {
    e.preventDefault();
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

  // eslint-disable-next-line max-len
  formPublicacion.append(cerrarModal, labelReceta, inputReceta, labelIngredientes, inputIngredientes, labelProcedimiento, inputProcedimiento, selectCategoria, btnPublicar);
  return formPublicacion;
};
