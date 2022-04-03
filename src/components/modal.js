export const modal = (signOutFunction) => {
  const containerModal = document.createElement('section');
  containerModal.setAttribute('id', 'containerModal');
  containerModal.setAttribute('class', 'modalContainer');
  const containerModalB = document.createElement('section');
  containerModalB.setAttribute('id', 'containerModalB');
  containerModalB.setAttribute('class', 'modalContainerB');
  const textSignOut = document.createElement('p');
  textSignOut.setAttribute('id', 'textSignOut');
  textSignOut.setAttribute('class', 'signOutText');
  textSignOut.textContent = '¿Estas segura que quieres salir?';
  const yesSignOut = document.createElement('button');
  yesSignOut.setAttribute('id', 'yesSignOut');
  yesSignOut.setAttribute('class', 'signOutYes');
  yesSignOut.textContent = 'Si';
  const noSignOut = document.createElement('button');
  noSignOut.setAttribute('id', 'noSignOut');
  noSignOut.setAttribute('class', 'signOutNo');
  noSignOut.textContent = 'No';
  containerModalB.append(yesSignOut, noSignOut);
  containerModal.append(textSignOut, containerModalB);

  yesSignOut.addEventListener('click', (e) => {
    e.preventDefault();
    signOutFunction();
  });

  noSignOut.addEventListener('click', () => {
    const containerClose = document.getElementById('showModal');
    containerClose.removeChild(containerModal);
  });
  return containerModal;
};
