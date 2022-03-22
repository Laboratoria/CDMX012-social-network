import {
  getFirestore, collection, addDoc, getDocs,
} from './firebase-import.js';

export const share = (text) => {
  const db = getFirestore();
  addDoc(collection(db, 'Shares'), { text });
};

export const getShares = () => {
  const db = getFirestore();
  getDocs(collection(db, 'Shares'));
};
