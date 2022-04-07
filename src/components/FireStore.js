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
  orderBy,
  arrayRemove,
  arrayUnion,
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
      likes: [],
      comment: { text: [], user: [] },
      // comment,
    });
  }
};
console.log(savePost());
// funcion para leer datos
export function readData() {
  const q = query(collection(db, 'Newposts'), orderBy('date', 'desc'));
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
export const countLikes = (idPost, UID, users, likesArray) => {
  const docRef = doc(db, 'Newposts', idPost);
  if (users) {
    if (likesArray.includes(UID)) {
      updateDoc(docRef, {
        likes: arrayRemove(UID),
      });
    } else {
      updateDoc(docRef, {
        likes: arrayUnion(UID),
      });
    }
  }
};
export const addComment = (textComment, idPost) => {
  const auth = getAuth();
  const users = auth.currentUser;
  const UID = users.uid;
  const name = users.displayName;
  const docRef = doc(db, 'Newposts', idPost);
  updateDoc(docRef, {
    'comment.text': arrayUnion(textComment),
    'comment.user': arrayUnion(name),
  });
};
