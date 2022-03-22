import { doc, deleteDoc, getFirestore } from '../firebase-imports.js';

export const deletePost = (docRef) => {
  const db = getFirestore();
  deleteDoc(doc(db, 'posts', docRef));
};
