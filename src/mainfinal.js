/* import {
  guardarReceta,
  conseguirRecetas,
  alConseguirRecetas,
  borrarReceta,
  conseguirReceta,
  actualizarReceta,
}
  from './lib/firestore.js';

const formPublicacion = document.getElementById('formPublicacion');
const postPublicado = document.getElementById('postPublicado');
let editandoReceta = false;
let id = '';
 */

/* window.addEventListener('DOMContentLoaded', async () => {
  alConseguirRecetas((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const publicacion = doc.data();
      html += `
      <div class = 'post'>
        <h3>${publicacion.receta}</h3>
        <p>${publicacion.ingredientes}</p>
        <p>${publicacion.procedimiento}</p>
        <p>${publicacion.categoria}</p>
        <img src="${publicacion.categoria.src}">
        <button class = 'borrarPost' data-id= "${doc.id}"> Borrar </button>
        <button class = 'editarPost' data-id= "${doc.id}"> Editar </button>
    </div>
    `;
    });
    postPublicado.innerHTML = html;
    const borrarPost = postPublicado.querySelectorAll('.borrarPost');
    borrarPost.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        borrarReceta(dataset.id); */
      /* Las dos lineas de arriba es simplificado de : event.target.dataset.id
 (obtiene el id del boton desde firestore) A esto se le llama destructuración */
      /* });
    });
    const editarPost = postPublicado.querySelectorAll('.editarPost');
    editarPost.forEach((btn) => {
      btn.addEventListener('click', async ({ target: { dataset } }) => {
        const datosReceta = await conseguirReceta(dataset.id);
        const recetaEditar = datosReceta.data();
        formPublicacion.inputReceta.value = recetaEditar.receta;
        formPublicacion.inputIngredientes.value = recetaEditar.ingredientes;
        formPublicacion.inputProcedimiento.value = recetaEditar.procedimiento;
        editandoReceta = true;
        id = datosReceta.id;
      });
    });
  });
});

formPublicacion.addEventListener('submit', (e) => {
  e.preventDefault();
  const receta = formPublicacion.inputReceta;
  const ingredientes = formPublicacion.inputIngredientes;
  const procedimiento = formPublicacion.inputProcedimiento;
  const categoria = formPublicacion.selectCategoria;
  console.log(categoria);
  if (!editandoReceta) {
    guardarReceta(receta.value, ingredientes.value, procedimiento.value, categoria.value);
  } else {
    actualizarReceta(id, {
      receta: receta.value, ingredientes: ingredientes.value, procedimiento: procedimiento.value, categoria: categoria.value,
    });
  }

  formPublicacion.reset();
});
 */