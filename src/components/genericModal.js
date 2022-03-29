export const genericModal = (funcion, parametros, textModal) => {
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
    closebtn.innerHTML = 'x';
    const txtModal = document.createElement('h2');
    txtModal.innerHTML = textModal;
    const acceptbtn = document.createElement('button');
    acceptbtn.setAttribute('class', 'accept-btn');
    acceptbtn.innerHTML = 'Yes';

    closebtn.addEventListener('click', () => {
      modal.classList.toggle('show-modal');
    });

    acceptbtn.addEventListener('click', () => {
      modal.classList.toggle('show-modal');
      funcion(...parametros);
    });

    modalContent.append(closebtn, txtModal, acceptbtn);
    modal.append(modalContent);
    document.body.appendChild(modal);
  }
};
