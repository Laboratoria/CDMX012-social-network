import { doc, deleteDoc, getFirestore } from '../firebase-imports.js';

export const deletePost = (docRef) => {
  console.log(docRef);
  const db = getFirestore();
  deleteDoc(doc(db, 'posts', docRef));
};
