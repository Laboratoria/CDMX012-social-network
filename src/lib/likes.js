import {
  getAuth, updateDoc, getFirestore, doc,
} from '../firebase-imports.js';
import { app } from './firebase-config.js';

const auth = getAuth(app);
export const currentUser = () => auth.currentUser;

// el usuario quiere dar like
export async function giveLike(userId, postId, likeList) {
  const db = getFirestore();
  const modifylikeList = likeList;
  modifylikeList.push(userId);
  const postRef = doc(db, 'posts', postId);
  await updateDoc(postRef, {
    likes: modifylikeList,
  });
}

// el usuario va a quitar su like
export async function dislike(userId, postId, likeList) {
  const db = getFirestore();
  const modifylikeList = likeList;
  modifylikeList.pop(userId);
  const postRef = doc(db, 'posts', postId);
  await updateDoc(postRef, {
    likes: modifylikeList,
  });
}
