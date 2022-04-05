// eslint-disable-next-line import/no-unresolved
import {
  query,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import { renderPost } from './post.js';
import { getAuth } from '../lib/firebaseFunctions.js';

const db = getFirestore();
export const saveForm = (userName, area, userMail) => {
  addDoc(collection(db, 'userData'), {
    Name: userName,
    Area: area,
    Mail: userMail,

  });
};
export const savePost = (textPost, datePost, likeCount) => {
  const auth = getAuth();
  const users = auth.currentUser;
  if (users) {
    console.log(users.displayName);
    const name = users.displayName;
    const email = users.email;
    const picture = users.photoURL;
    const UID = users.uid;
    // const likeCount = [];
    addDoc(collection(db, 'Newposts'), {
      post: textPost,
      date: datePost,
      Name: name,
      Email: email,
      UserUID: UID,
      pp: picture,
      likes: likeCount,
      // comment,
    });
  }
};
console.log(savePost());
// funcion para leer datos
export function readData() {
  const q = query(collection(db, 'Newposts'));
  onSnapshot(q, (querySnapshot) => {
    const wall = document.getElementById('postFeed');
    while (wall.firstChild) {
      wall.removeChild(wall.firstChild);
    }
    querySnapshot.forEach((document) => {
      renderPost(document);
    });
  });
}
// export function realTimeData(){
// }
export const deletePost = (idPost, userVerify) => {
  const auth = getAuth();
  const users = auth.currentUser;
  const docRef = doc(db, 'Newposts', idPost);
  if (users) {
    const UID = users.uid;
    if (UID === userVerify) {
      deleteDoc(docRef);
      console.log('Si se borro');
    }
  }
};
export const editDoc = (editedInput, idPost) => {
  const docRef = doc(db, 'Newposts', idPost);
  updateDoc(docRef, {
    post: editedInput,
  });
};
// export async function readUser() {
//   const querySnapshot = await getDocs(collection(db, 'userData'));
//   querySnapshot.forEach((doc) => {
//     // rednerPost es la funcion para darle el estilo al post y asignar los datos obtenidos
//     // del input del post para visualizarlos en el feed
//     renderPost(doc);
//     console.log(doc.data().Name);
//   });
// }
// readUser();
// export function deletePost(id) {
//   deleteDoc(collection(db, 'Newposts').doc(id));
// }
// real time
// export function update() {
//   const unsub = onSnapshot(collection(db, 'Newposts'), (doc) => {
//     console.log(doc.data);
//   });
//   return unsub;
// }
// update();
