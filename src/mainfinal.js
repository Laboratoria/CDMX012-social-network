import {
  guardarReceta,
 conseguirRecetas,
 alConseguirRecetas,
 borrarReceta,
}
  from "./lib/firestore.js";

const formPublicacion = document.getElementById('formPublicacion');
const postPublicado = document.getElementById('postPublicado');

window.addEventListener('DOMContentLoaded', async () => {
  alConseguirRecetas((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const publicacion = doc.data();
      html += `
      <div class = 'post'>
        <h3>${publicacion.receta}</h3>
        <p>${publicacion.procedimiento}</p>
        <button class = 'borrarPost' data-id= "${doc.id}"> Borrar </button>
    </div>
    `;
    });
    postPublicado.innerHTML = html;
    const borrarPost = postPublicado.querySelectorAll('.borrarPost');
    borrarPost.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        borrarReceta(dataset.id);
      /* Las dos lineas de arriba es simplificado de : event.target.dataset.id
 (obtiene el id del boton desde firestore) A esto se le llama destructuración */
      });
    });
  });
});

formPublicacion.addEventListener('submit', (e) => {
  e.preventDefault();
  const receta = formPublicacion['inputReceta'];
  const procedimiento = formPublicacion['inputProcedimiento'];
  guardarReceta(receta.value, procedimiento.value);
  formPublicacion.reset();
});
