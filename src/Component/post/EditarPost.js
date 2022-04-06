import { conseguirReceta, guardarReceta, actualizarReceta } from '../../lib/firestore.js';

/* export const editarYoGuardarPost = () => {
  let editandoReceta = '';
  let id = '';
  const formPublicacion = document.getElementById('formPublicacion');
  const divPost = document.getElementById('postPublicado');
  console.log(divPost);
  const editarPost1 = divPost.querySelectorAll('.editarPost');
  console.log(editarPost1);
  editarPost1.forEach((btn) => {
    console.log(btn);
    btn.addEventListener('click', async ({ target: { dataset } }) => {
      const datosReceta = await conseguirReceta(dataset.id);
      const recetaEditar = datosReceta.data();
      console.log(recetaEditar);
      formPublicacion.inputReceta.value = recetaEditar.receta;
      formPublicacion.inputIngredientes.value = recetaEditar.ingredientes;
      formPublicacion.inputProcedimiento.value = recetaEditar.procedimiento;
      editandoReceta = true;
      id = datosReceta.id;
    });
  });
  formPublicacion.addEventListener('submit', (e) => {
    e.preventDefault();
    const receta = formPublicacion.inputReceta;
    const ingredientes = formPublicacion.inputIngredientes;
    const procedimiento = formPublicacion.inputProcedimiento;
    const categoria = formPublicacion.selectCategoria;
    if (!editandoReceta) {
      guardarReceta(receta.value, ingredientes.value, procedimiento.value, categoria.value);
    } else {
      actualizarReceta(id, {
        receta: receta.value, ingredientes: ingredientes.value, procedimiento: procedimiento.value, categoria: categoria.value,
      });
    }
  
    formPublicacion.reset();
  });
};
 */