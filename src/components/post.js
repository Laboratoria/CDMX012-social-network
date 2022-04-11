// eslint-disable-next-line import/no-cycle
import {
  countLikes,
  deletePost,
  editDoc,
  addComment,
} from './FireStore.js';
import { getAuth } from '../lib/firebaseFunctions.js';

export function renderPost(doc) {
  const sectionPost = document.createElement('div');
  sectionPost.setAttribute('class', 'sectionPost');
  const showModal = document.createElement('div');
  showModal.setAttribute('class', 'showModal');

  const templateTop = document.createElement('div');
  templateTop.setAttribute('class', 'templateTop');

  const profilePic = document.createElement('img');
  profilePic.setAttribute('id', 'profilePic');
  profilePic.setAttribute('src', doc.data().pp || 'img/pp.jpeg');

  const profileName = document.createElement('label');
  profileName.setAttribute('class', 'profileName');
  profileName.textContent = doc.data().Name;
  const deletePostButton = document.createElement('img');
  const edit = document.createElement('img');

  const auth = getAuth();
  const users = auth.currentUser;
  const UID = users.uid;
  const userVerify = doc.data().UserUID;
  // texto del post
  const pPost = document.createElement('p');
  pPost.setAttribute('id', 'inputPost');
  pPost.setAttribute('data-id', doc.id);
  pPost.textContent = doc.data().post;

  if (UID === userVerify) {
    deletePostButton.setAttribute('src', 'img/delete.png');
    deletePostButton.setAttribute('id', 'buttonDelete');
    edit.setAttribute('src', 'img/edit.png');
    edit.setAttribute('id', 'buttonEdit');
  }

  const likeComment = document.createElement('div');
  likeComment.setAttribute('id', 'likeComment');

  const postDate = document.createElement('p');
  postDate.setAttribute('id', 'postDate');
  postDate.textContent = doc.data().date;

  const likeIcon = document.createElement('img');
  likeIcon.setAttribute('src', 'img/like.png');

  const commentIcon = document.createElement('img');
  commentIcon.setAttribute('src', 'img/comment.png');

  const likes = document.createElement('p');
  likes.setAttribute('id', 'likes');
  const likesArray = doc.data().likes;
  const likeData = doc.data().likes.length;
  likes.textContent = likeData;

  const commentInput = document.createElement('input');
  const sendComment = document.createElement('button');
  commentInput.setAttribute('id', 'commentInput');
  commentInput.setAttribute('placeholder', 'Escribe tu respuesta');
  sendComment.textContent = 'Enviar';
  sendComment.setAttribute('class', 'button');

  templateTop.append(profilePic, profileName, deletePostButton, edit);
  likeComment.append(postDate, likes, likeIcon, commentIcon);
  sectionPost.append(templateTop, pPost, likeComment,showModal);

  commentIcon.addEventListener('click', (e) => {
    e.preventDefault();
    sectionPost.append(commentInput, sendComment);
    // addComment()
    // llamar a la función que ejecuta los likes (editando el documento)
  });
  const idPost = doc.id;
  sendComment.addEventListener('click', () => {
    const textComment = document.getElementById('commentInput').value;
    addComment(textComment, idPost);
    // para poder acceder a los valores del objeto de los comentarios
    console.log(doc.data().comment.text, doc.data().comment.user);
  });

  likeIcon.addEventListener('click', () => {
    // console.log(likesArray); - Arreglo que contiene los UID de quienes le da like
    countLikes(idPost, UID, users, likesArray);
  });
  // console.log(userVerify);
  const modal = () => {
    const containerModal = document.createElement('section');
    containerModal.setAttribute('id', 'containerModal');
    containerModal.setAttribute('class', 'modalContainer');
    const containerModalB = document.createElement('section');
    containerModalB.setAttribute('id', 'containerModalB');
    containerModalB.setAttribute('class', 'modalContainerB');
    const textSignOut = document.createElement('p');
    textSignOut.setAttribute('id', 'textSignOut');
    textSignOut.setAttribute('class', 'signOutText');
    textSignOut.textContent = 'Si se elimina esta publicación no podrá recuperar su contenido';
    const yesSignOut = document.createElement('p');
    yesSignOut.setAttribute('id', 'yesSignOut');
    yesSignOut.setAttribute('class', 'signOutYes');
    yesSignOut.textContent = 'Eliminar';
    const noSignOut = document.createElement('p');
    noSignOut.setAttribute('id', 'noSignOut');
    noSignOut.setAttribute('class', 'signOutNo');
    noSignOut.textContent = 'Cancelar';
    containerModalB.append(yesSignOut, noSignOut);
    containerModal.append(textSignOut, containerModalB);

    yesSignOut.addEventListener('click', (e) => {
      e.preventDefault();
      deletePost(idPost, userVerify);
    });

    noSignOut.addEventListener('click', () => {
      showModal.removeChild(containerModal);
    });
    return containerModal;
  };

  deletePostButton.addEventListener('click', () => {
    while (showModal.firstChild) {
      showModal.removeChild(showModal.firstChild);
    }
    showModal.append(modal());
  });
  edit.addEventListener('click', () => {
    pPost.contentEditable = 'true';
    const editPostButton = document.createElement('button');
    editPostButton.setAttribute('class', 'button');
    editPostButton.setAttribute('id', 'editPostButton');
    editPostButton.textContent = 'enviar';
    templateTop.append(editPostButton);
    editPostButton.addEventListener('click', () => {
      const editedInput = pPost.innerText;
      // toma el nuevo texto para enviarlo - console.log(editedInput);
      editDoc(editedInput, idPost);
      // ejecuta la función con los parametros correctos - console.log('si se edito');
    });
  });

  const wall = document.getElementById('postFeed');
  wall.append(sectionPost);

  return sectionPost;
}
