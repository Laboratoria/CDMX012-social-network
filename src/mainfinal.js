import { guardarReceta, conseguirRecetas } from "./lib/firestore.js";
const formPublicacion = document.getElementById('formPublicacion');
const postPublicado = document.getElementById('postPublicado');
window.addEventListener('DOMContentLoaded', async () => {
  const querySnapshot = await conseguirRecetas();
  querySnapshot.forEach((doc) => {
    const publicacion = doc.data();
    postPublicado.textContent = publicacion.receta;
    //Tenemos que incluir creación de nodos :(((((((())))))))
  });
});

formPublicacion.addEventListener('submit', (e) => {
    e.preventDefault();
    const receta = formPublicacion['inputReceta'];
    const procedimiento = formPublicacion['inputProcedimiento'];
    guardarReceta(receta.value, procedimiento.value);
    formPublicacion.reset();
});