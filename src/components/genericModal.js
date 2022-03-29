export const genericModal = () => {
  // buscar el modal, si no existe, lo creo
  // ya con modal, le agrego la funcion y sus parametros

  // find modal or create modal
  let modal = document.querySelector('modal');
  if (modal === null) {
    modal = document.createElement('div');
    modal.setAttribute('class', 'modal show-modal');
    const modalContent = document.createElement('div');
    modalContent.setAttribute('class', 'modal-content');
    const closebtn = document.createElement('span');
    closebtn.setAttribute('class', 'close-button');
    const txtModal = document.createElement('h1');
    txtModal.innerHTML = 'Hello modal';
    const acceptbtn = document.createElement('button');
    acceptbtn.innerHTML = 'Accept';

    closebtn.addEventListener('click', () => {
      modal.classList.toggle('show-modal');
    });

    acceptbtn.addEventListener('click', () => {
      modal.classList.toggle('show-modal');
      console.log('hola mundo');
    });

    modal.append(modalContent, closebtn, txtModal, acceptbtn);
    document.body.appendChild(modal);
  }
};
