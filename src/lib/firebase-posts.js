/* eslint-disable import/no-unresolved */
import {
  getFirestore, collection, addDoc, getDocs, 
} from 'firebase-imports.js';

export const db = getFirestore(app); // Save registerData collection in fireStore

export const savePost = (username, post) => {
  addDoc(collection(db, 'posts'), {
    username,
    post,
  });
};

/* export const getPost = () => {
    getDocs(collection(db, 'posts'));
  }; */
