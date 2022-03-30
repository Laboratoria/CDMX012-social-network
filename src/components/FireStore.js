// eslint-disable-next-line import/no-unresolved
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import { renderPost } from './post.js';

const db = getFirestore();
export const saveForm = (userName, area, userMail) => {
  addDoc(collection(db, 'userData'), {
    Name: userName,
    Area: area,
    Mail: userMail,

  });
};
export const savePost = (textPost, datePost) => {
  addDoc(collection(db, 'Newposts'), {
    post: textPost,
    date: datePost,
  });
};
// funcion para leer datos
export async function readData() {
  const querySnapshot = await getDocs(collection(db, 'Newposts'));
  querySnapshot.forEach((doc) => {
    // rednerPost es la funcion para darle el estilo al post y asignar los datos obtenidos
    // del input del post para visualizarlos en el feed
    renderPost(doc);
  });
}
