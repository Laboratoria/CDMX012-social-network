/* eslint-disable import/named */
import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
} from './firebase-imports.js';
import { auth, db } from './firebase-config.js';

export const savePost = (post, date) => {
  // const user = auth.currentUser;
  // addDoc(collection(db, 'posts'), {
  //   username: user.displayName,
  //   post,
  // });
  const user = auth.currentUser;
  if (user) {
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;
    const photo = user.photoURL;

    return addDoc(collection(db, 'posts'), {
      post,
      date,
      uid,
      displayName,
      email,
      photo,
    });
  } else {
    // No user is signed in.
  }
};

export const getPost = () => {
  const posts = collection(db, 'posts');
  const docPost = getDocs(posts);
  docPost.forEach((element) => {
    const postNews = document.getElementById('sectionContainerPost');
    if (element.posts.exists()) {
      const postSection = document.createElement('section');
      postSection.className = 'sectionContainerPost';
      const userPostValue = posts.username;
      const postValue = posts.post;
      const username = document.createElement('p');
      const postText = document.createElement('p');
      username.textContent(userPostValue);
      postText.textContent(postValue);
      postNews.append(username, postText);
    }
    return postNews;
  });
};