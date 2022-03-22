import { getFirestore, doc, updateDoc } from '../firebase-imports.js';

async function saveChanges(postData, node) {
  const editForm = document.querySelector('#edit-form');
  // eslint-disable-next-line no-param-reassign
  node.innerHTML = `<div id="post-content">
    <p>Reading: ${editForm.reading.value}</p>
    <p>${editForm.txt.value}</p>
    <div>`;

  const db = getFirestore();

  const postRef = doc(db, 'posts', postData.idDocument);
  await updateDoc(postRef, {
    reading: editForm.reading.value,
    text: editForm.txt.value,
  });
}

export function toEditable(postData, node) {
  const reading = postData.reading;
  const text = postData.text;

  // const postToEdit = document.querySelector(`#${postData.idDocument}`);
  node.removeChild(node.firstChild);

  const editionForm = document.createElement('form');
  editionForm.setAttribute('id', 'edit-form');
  editionForm.innerHTML = `<p>Reading:<input type="text" name="reading" value="${reading}"></p>
  <textarea name="txt">${text}</textarea>
  <input type="button"`;

  const btnSave = document.createElement('input');
  btnSave.setAttribute('type', 'button');
  btnSave.setAttribute('value', 'Save');

  node.append(editionForm, btnSave);

  btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    saveChanges(postData, node);
  });
}
