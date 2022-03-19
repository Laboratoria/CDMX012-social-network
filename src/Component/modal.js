export const modal = () => {
  

  const contenedorModal = document.createElement('div');
  contenedorModal.setAttribute('class', 'contenedorModal');
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
 
  return contenedorModal;
};
