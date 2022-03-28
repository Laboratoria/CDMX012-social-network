import { updatePost } from '../lib/update-doc.js';

function saveChanges(postData, node, newData) {
  const idDoc = postData.idDocument;

  updatePost(idDoc, newData).then(() => {
    console.log('Post edited');
    // eslint-disable-next-line no-param-reassign
    node.innerHTML = `<div class="post-content">
    <div><img src= "./assets/libro-abierto.png" class= "book-icon"><p><strong>  ${newData.reading}</strong></p></div> <br>
    <p>${newData.text}</p>
    </div>`;

    console.log(node.innerHTML);
  }).catch((error) => {
    console.log(error, 'Post cannot be update');
  });
}

export function toEditable(postData, node) {
  const reading = postData.reading;
  const text = postData.text;

  node.removeChild(node.firstChild);

  const editionForm = document.createElement('form');
  editionForm.setAttribute('class', 'edit-form');
  editionForm.innerHTML = `<div class="post-content">
  <div><img src= "./assets/open-book.png" class= "book-icon"> <input type="text" class= "reading-txt" name="reading" value="${reading}"></div>
  <br>
  <textarea name="txt" class="reading-description" rows="5">${text}</textarea>
  <br>
  </div>`;

  const btnSave = document.createElement('input');
  btnSave.setAttribute('type', 'button');
  btnSave.setAttribute('id', 'btn-save');
  btnSave.setAttribute('value', 'Save');

  node.append(editionForm, btnSave);

  btnSave.addEventListener('click', (e) => {
    const readingTxt = document.querySelector('.reading-txt');
    const readingDescription = document.querySelector('.reading-description');
    const newData = {
      reading: readingTxt.value,
      text: readingDescription.value,
    };
    e.preventDefault();
    saveChanges(postData, node, newData);
  });
}
