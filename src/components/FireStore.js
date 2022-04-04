// eslint-disable-next-line import/no-unresolved
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
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
export const savePost = (textPost, datePost) => {
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
      // comment,
    });
  }
};
console.log(savePost());
// funcion para leer datos
export async function readData() {
  const querySnapshot = await getDocs(collection(db, 'Newposts'));
  querySnapshot.forEach((doc) => {
    // rednerPost es la funcion para darle el estilo al post y asignar los datos obtenidos
    // del input del post para visualizarlos en el feed
    renderPost(doc);
    console.log(doc.data());
  });
}

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
