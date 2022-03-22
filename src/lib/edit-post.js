import { getFirestore, doc, updateDoc } from '../firebase-imports.js';

async function saveChanges(postData, node) {
  const editForm = document.querySelector('.edit-form');
  // eslint-disable-next-line no-param-reassign
  node.innerHTML = `<div class="post-content">
    <div><img src= "./assets/libro-abierto.png" class= "book-icon"><p><strong>  ${editForm.reading.value}</strong></p></div> <br>
    <p>${editForm.txt.value}</p>
    </div>`;

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

  node.removeChild(node.firstChild);

  const editionForm = document.createElement('form');
  editionForm.setAttribute('class', 'edit-form');
  editionForm.innerHTML = `<div class="post-content">
  <div><img src= "./assets/libro-abierto.png" class= "book-icon"> <input type="text" class= "reading-txt" name="reading" value="${reading}"></div>
  <br>
  <textarea name="txt" rows="5">${text}</textarea>
  <br>
  </div>`;

  const btnSave = document.createElement('input');
  btnSave.setAttribute('type', 'button');
  btnSave.setAttribute('value', 'Save');

  node.append(editionForm, btnSave);

  btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    saveChanges(postData, node);
  });
}
