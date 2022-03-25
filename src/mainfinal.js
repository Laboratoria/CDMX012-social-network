import {
  guardarReceta,
 conseguirRecetas,
  onSnapshot,
  collection,
  db,
}
  from "./lib/firestore.js";

const formPublicacion = document.getElementById('formPublicacion');
const postPublicado = document.getElementById('postPublicado');

window.addEventListener('DOMContentLoaded', async () => {
  onSnapshot(collection(db, 'recetas'), (querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const publicacion = doc.data();
      html += `
      <div class = "post">
        <h3>${publicacion.receta}</h3>
        <p>${publicacion.procedimiento}</p>
    </div>
    `;
    });
    postPublicado.innerHTML = html;
  });
});

formPublicacion.addEventListener('submit', (e) => {
  e.preventDefault();
  const receta = formPublicacion['inputReceta'];
  const procedimiento = formPublicacion['inputProcedimiento'];
  guardarReceta(receta.value, procedimiento.value);
  formPublicacion.reset();
});
