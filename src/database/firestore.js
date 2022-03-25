import {
  getFirestore, collection, addDoc, getAuth,
} from './firebase-import.js';

export const post = (text) => {
  const db = getFirestore();
  const auth = getAuth();
  const userlogin = auth.currentUser;
  const uid = userlogin.uid;
  addDoc(collection(db, 'Posts'), { text, uid });
};

// export const getShares = () => {
//   const db = getFirestore();
//   getDocs(collection(db, 'Shares'));
// };
